import { MutableRefObject, useEffect, useState } from "react";
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
import { FaTimes } from "react-icons/fa";
import type { Photo } from "../../data/gallery";

export type LightboxPhoto = {
    photo: Photo;
    // The variant the page already rendered. It is in cache, so it paints instantly
    // and stands in while the full-resolution original downloads.
    previewSrc: string;
    alt: string;
};

type PhotoLightboxProps = {
    // Null when closed. Deliberately one photo rather than a list: the gallery is a
    // scrolling column, so paging inside the lightbox would only duplicate scrolling.
    selected: LightboxPhoto | null;
    onClose: () => void;
    // The element that opened the lightbox; focus returns here on close.
    triggerRef?: MutableRefObject<HTMLElement | null>;
};

// The archival original, which is the whole point of opening the lightbox. Photos in
// months that have not been backfilled yet have no `responsive` block, in which case
// `filename` still points at the original.
const fullResolutionSrc = (photo: Photo) =>
    photo.responsive?.originalSrc ?? photo.filename;

const PhotoLightbox = ({ selected, onClose, triggerRef }: PhotoLightboxProps) => {
    const [fullLoaded, setFullLoaded] = useState(false);

    // A different photo means a different original to download.
    useEffect(() => {
        setFullLoaded(false);
    }, [selected?.previewSrc]);

    if (!selected) return null;

    return (
        // Chakra's Modal supplies the focus trap, Escape handling, aria-modal and
        // scroll lock, so none of that is hand-rolled here.
        <Modal
            isOpen
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
                            h={{ base: "72vh", md: "86vh" }}
                        >
                            {/* Already cached, so the photo appears immediately rather
                                than leaving a black frame during the download. Both
                                images fill the same box with the same object-fit, so
                                the swap is registered to the pixel. */}
                            <Image
                                src={selected.previewSrc}
                                alt={selected.alt}
                                position="absolute"
                                inset={0}
                                width="100%"
                                height="100%"
                                objectFit="contain"
                            />
                            <Image
                                src={fullResolutionSrc(selected.photo)}
                                alt={selected.alt}
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

                        {selected.photo.caption ? (
                            <Text
                                fontSize="0.8rem"
                                fontFamily="monospace"
                                color="whiteAlpha.800"
                                textAlign="center"
                            >
                                {selected.photo.caption}
                            </Text>
                        ) : null}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PhotoLightbox;
