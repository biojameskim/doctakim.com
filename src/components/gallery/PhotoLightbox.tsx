import { MutableRefObject, useEffect, useState } from "react";
import {
    Box,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
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

const loadingPulse = keyframes`
    0%, 100% { outline-color: rgba(255, 255, 255, 0.12); }
    50%      { outline-color: rgba(255, 255, 255, 0.55); }
`;

const aspectFrom = (photo: Photo) => {
    const responsive = photo.responsive;
    return responsive
        ? `${responsive.intrinsicWidth} / ${responsive.intrinsicHeight}`
        : null;
};

const PhotoLightbox = ({ selected, onClose, triggerRef }: PhotoLightboxProps) => {
    const [fullLoaded, setFullLoaded] = useState(false);
    // Sizing the frame to the photo's own shape is what lets the caption sit flush
    // with the image's left edge instead of a container edge somewhere off to the
    // side. Migrated photos carry their dimensions; older ones report them on load.
    const [aspect, setAspect] = useState<string | null>(null);
    useEffect(() => {
        setFullLoaded(false);
        setAspect(selected ? aspectFrom(selected.photo) : null);
    }, [selected]);

    if (!selected) return null;

    const isLandscape = selected.photo.orientation === "h";

    return (
        // Chakra's Modal supplies the focus trap, Escape handling, aria-modal and
        // scroll lock, so none of that is hand-rolled here. There is no close button:
        // Escape or a click outside the photo dismisses it.
        <Modal
            isOpen
            onClose={onClose}
            size="full"
            motionPreset="none"
            isCentered
            finalFocusRef={triggerRef as MutableRefObject<HTMLElement> | undefined}
        >
            {/* Opaque rather than translucent: at any transparency the white gallery
                page glows through and washes out the photo. A mid grey rather than
                black so the surround stays quiet without feeling like a void. */}
            <ModalOverlay bg="#333333" />
            <ModalContent
                bg="transparent"
                boxShadow="none"
                m={0}
                onClick={onClose}
                aria-label={selected.photo.caption || "Photo, full size"}
            >
                <ModalBody
                    p={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="100vh"
                >
                    <Flex
                        direction="column"
                        align="flex-start"
                        gap={3}
                        px={{ base: 3, md: 8 }}
                        py={{ base: 8, md: 10 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Box
                            position="relative"
                            lineHeight={0}
                            // Pixel widths, deliberately. Sizing in vh/vw pinned the
                            // photo to a fixed share of the screen, which cancelled
                            // browser zoom out entirely. In px the browser can scale
                            // it up and the modal container scrolls to let you pan.
                            // Roughly 1.4x the column (350px / 450px) — bigger, but
                            // still recognisably the same photo.
                            w={`min(92vw, ${isLandscape ? 460 : 400}px)`}
                            sx={{
                                ...(aspect ? { aspectRatio: aspect } : {}),
                                // Mirrors the column's skeleton: a soft pulse tells you
                                // the sharper original is still on its way, without
                                // hiding the preview that is already on screen.
                                ...(fullLoaded
                                    ? {}
                                    : {
                                        outline: "1px solid rgba(255,255,255,0.35)",
                                        outlineOffset: "0px",
                                        animation: `${loadingPulse} 1.4s ease-in-out infinite`,
                                        "@media (prefers-reduced-motion: reduce)": {
                                            animation: "none",
                                        },
                                    }),
                            }}
                        >
                            {/* Already cached, so the photo appears immediately rather
                                than leaving a black frame during the download. Both
                                images fill the same box with the same object-fit, so
                                the swap is registered to the pixel. */}
                            <Image
                                src={selected.previewSrc}
                                alt={selected.alt}
                                onLoad={(event) => {
                                    if (aspect) return;
                                    const img = event.currentTarget;
                                    setAspect(`${img.naturalWidth} / ${img.naturalHeight}`);
                                }}
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
                        </Box>

                        {selected.photo.caption ? (
                            <Text
                                fontSize="0.8rem"
                                fontFamily="monospace"
                                color="whiteAlpha.800"
                                textAlign="left"
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
