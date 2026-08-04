import { MutableRefObject, useCallback, useEffect, useState } from "react";
import {
    Box,
    Flex,
    IconButton,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import type { Photo } from "../../data/gallery";

export type LightboxPhoto = {
    photo: Photo;
    // The variant the page already rendered. It is in cache, so it paints instantly
    // and stands in while the full-resolution original downloads.
    previewSrc: string;
    alt: string;
};

type PhotoLightboxProps = {
    photos: LightboxPhoto[];
    index: number | null;
    onClose: () => void;
    onNavigate: (nextIndex: number) => void;
    // The element that opened the lightbox; focus returns here on close.
    triggerRef?: MutableRefObject<HTMLElement | null>;
};

// The archival original, which is the whole point of opening the lightbox. Photos in
// months that have not been backfilled yet have no `responsive` block, in which case
// `filename` still points at the original.
const fullResolutionSrc = (photo: Photo) =>
    photo.responsive?.originalSrc ?? photo.filename;

const PhotoLightbox = ({ photos, index, onClose, onNavigate, triggerRef }: PhotoLightboxProps) => {
    const isOpen = index !== null;
    const current = isOpen ? photos[index] : null;
    const [fullLoaded, setFullLoaded] = useState(false);

    // Each photo downloads its own original, so the swap state resets per photo.
    useEffect(() => {
        setFullLoaded(false);
    }, [index]);

    const goPrevious = useCallback(() => {
        if (index === null) return;
        onNavigate((index - 1 + photos.length) % photos.length);
    }, [index, photos.length, onNavigate]);

    const goNext = useCallback(() => {
        if (index === null) return;
        onNavigate((index + 1) % photos.length);
    }, [index, photos.length, onNavigate]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrevious();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, goPrevious, goNext]);

    if (!current) return null;

    const hasSiblings = photos.length > 1;
    const fullSrc = fullResolutionSrc(current.photo);

    return (
        // Chakra's Modal supplies the focus trap, Escape handling, aria-modal and
        // scroll lock, so none of that is hand-rolled here.
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            motionPreset="none"
            isCentered
            finalFocusRef={triggerRef as MutableRefObject<HTMLElement> | undefined}
        >
            {/* Fully opaque: any transparency lets the white gallery page glow through
                and washes out the photo it is meant to showcase. */}
            <ModalOverlay bg="black" />
            <ModalContent bg="transparent" boxShadow="none" m={0} onClick={onClose}>
                <ModalBody
                    p={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="100vh"
                >
                    <IconButton
                        aria-label="Close"
                        icon={<FaTimes />}
                        onClick={onClose}
                        position="fixed"
                        top={4}
                        right={4}
                        zIndex={2}
                        variant="ghost"
                        color="whiteAlpha.900"
                        _hover={{ bg: "whiteAlpha.200" }}
                    />

                    {hasSiblings && (
                        <>
                            <IconButton
                                aria-label="Previous photo"
                                icon={<FaChevronLeft />}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    goPrevious();
                                }}
                                position="fixed"
                                left={{ base: 1, md: 4 }}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                variant="ghost"
                                color="whiteAlpha.900"
                                _hover={{ bg: "whiteAlpha.200" }}
                            />
                            <IconButton
                                aria-label="Next photo"
                                icon={<FaChevronRight />}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    goNext();
                                }}
                                position="fixed"
                                right={{ base: 1, md: 4 }}
                                top="50%"
                                transform="translateY(-50%)"
                                zIndex={2}
                                variant="ghost"
                                color="whiteAlpha.900"
                                _hover={{ bg: "whiteAlpha.200" }}
                            />
                        </>
                    )}

                    <Flex
                        direction="column"
                        align="center"
                        gap={3}
                        maxW="100vw"
                        px={{ base: 2, md: 12 }}
                        py={{ base: 12, md: 8 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Box
                            position="relative"
                            lineHeight={0}
                            w={{ base: "96vw", md: "88vw" }}
                            h={{ base: "70vh", md: "84vh" }}
                        >
                            {/* Already cached, so the photo appears immediately rather
                                than leaving a black frame during the download. Both
                                images fill the same box with the same object-fit, so
                                the swap is registered to the pixel. */}
                            <Image
                                src={current.previewSrc}
                                alt={current.alt}
                                position="absolute"
                                inset={0}
                                width="100%"
                                height="100%"
                                objectFit="contain"
                            />
                            <Image
                                src={fullSrc}
                                alt={current.alt}
                                onLoad={() => setFullLoaded(true)}
                                position="absolute"
                                inset={0}
                                width="100%"
                                height="100%"
                                objectFit="contain"
                                opacity={fullLoaded ? 1 : 0}
                                transition="opacity 200ms ease-out"
                            />
                            {!fullLoaded && (
                                <Spinner
                                    position="absolute"
                                    bottom={3}
                                    right={3}
                                    size="sm"
                                    color="whiteAlpha.800"
                                    thickness="2px"
                                    speed="0.8s"
                                    aria-label="Loading full resolution"
                                />
                            )}
                        </Box>

                        {current.photo.caption ? (
                            <Text
                                fontSize="0.8rem"
                                fontFamily="monospace"
                                color="whiteAlpha.800"
                                textAlign="center"
                            >
                                {current.photo.caption}
                            </Text>
                        ) : null}

                        {hasSiblings && (
                            <Text fontSize="0.75rem" fontFamily="monospace" color="whiteAlpha.600">
                                {(index ?? 0) + 1} / {photos.length}
                            </Text>
                        )}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PhotoLightbox;
