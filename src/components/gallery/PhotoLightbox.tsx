import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
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
    // The same density set the column rendered. Handing the browser the identical
    // srcset lets it reuse whichever rung it already cached, so the stand-in is
    // instant on every screen. Hardcoding one rung only worked on 2x displays.
    previewSrc: string;
    previewSrcSet?: string;
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
    0%, 100% {
        outline-color: rgba(255, 255, 255, 0.25);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.04);
    }
    50% {
        outline-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 0 16px 3px rgba(255, 255, 255, 0.22);
    }
`;

const MIN_ZOOM = 1;
const MAX_ZOOM = 6;

type Pan = { x: number; y: number };

// Safari exposes trackpad pinches as non-standard gesture events. Keeping the
// small shape we consume here avoids adding WebKit-only types to the whole app.
type WebKitGestureEvent = Event & {
    clientX: number;
    clientY: number;
    scale: number;
};

export const clampZoom = (zoom: number) =>
    Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom));

export const panForZoom = (
    pan: Pan,
    oldZoom: number,
    newZoom: number,
    focalPoint: Pan,
): Pan => {
    const ratio = newZoom / oldZoom;
    return {
        x: focalPoint.x - (focalPoint.x - pan.x) * ratio,
        y: focalPoint.y - (focalPoint.y - pan.y) * ratio,
    };
};

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
    const [zoom, setZoom] = useState(MIN_ZOOM);
    const [pan, setPan] = useState<Pan>({ x: 0, y: 0 });
    const [viewportElement, setViewportElement] = useState<HTMLDivElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const frameRef = useRef<HTMLDivElement | null>(null);
    const zoomRef = useRef(MIN_ZOOM);
    const panRef = useRef<Pan>({ x: 0, y: 0 });
    const gestureStartZoomRef = useRef(MIN_ZOOM);

    // Chakra portals the modal body after the lightbox's first effect. A plain ref
    // would still be null when that effect tried to attach gesture listeners and,
    // because ref changes do not render, they would never be attached. Element state
    // makes the portal mount an explicit dependency of the listener effect.
    const captureViewport = useCallback((element: HTMLDivElement | null) => {
        viewportRef.current = element;
        setViewportElement(element);
    }, []);

    const commitView = useCallback((nextZoom: number, nextPan: Pan) => {
        const viewport = viewportRef.current;
        const frame = frameRef.current;
        const boundedZoom = clampZoom(nextZoom);

        let boundedPan = nextPan;
        if (viewport && frame) {
            const maxX = Math.max(
                0,
                (frame.offsetWidth * boundedZoom - viewport.clientWidth) / 2,
            );
            const maxY = Math.max(
                0,
                (frame.offsetHeight * boundedZoom - viewport.clientHeight) / 2,
            );
            boundedPan = {
                x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
                y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
            };
        }

        // A photo smaller than the viewport stays centred until its scaled edge
        // actually exceeds that viewport. This prevents zooming from flinging a
        // portrait to one side before there is anything to pan.
        zoomRef.current = boundedZoom;
        panRef.current = boundedZoom === MIN_ZOOM ? { x: 0, y: 0 } : boundedPan;
        setZoom(boundedZoom);
        setPan(panRef.current);
    }, []);

    const zoomAround = useCallback((nextZoom: number, clientX: number, clientY: number) => {
        const viewport = viewportRef.current;
        if (!viewport) return;
        const rect = viewport.getBoundingClientRect();
        const focalPoint = {
            x: clientX - rect.left - rect.width / 2,
            y: clientY - rect.top - rect.height / 2,
        };
        const boundedZoom = clampZoom(nextZoom);
        commitView(
            boundedZoom,
            panForZoom(panRef.current, zoomRef.current, boundedZoom, focalPoint),
        );
    }, [commitView]);

    useEffect(() => {
        setFullLoaded(false);
        setAspect(selected ? aspectFrom(selected.photo) : null);
        commitView(MIN_ZOOM, { x: 0, y: 0 });
    }, [selected, commitView]);

    useEffect(() => {
        const viewport = viewportElement;
        if (!selected || !viewport) return undefined;

        // Chrome represents a trackpad pinch as a wheel event with ctrlKey set.
        // This must be a native, non-passive listener or preventDefault cannot keep
        // the browser's page zoom from competing with the photo zoom.
        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey) {
                event.preventDefault();
                zoomAround(
                    zoomRef.current * Math.exp(-event.deltaY * 0.01),
                    event.clientX,
                    event.clientY,
                );
                return;
            }

            // Once enlarged, a normal two-finger trackpad scroll pans the photo.
            if (zoomRef.current > MIN_ZOOM) {
                event.preventDefault();
                commitView(zoomRef.current, {
                    x: panRef.current.x - event.deltaX,
                    y: panRef.current.y - event.deltaY,
                });
            }
        };

        // Safari emits gesturestart/change/end instead of Ctrl+wheel.
        const handleGestureStart = (event: Event) => {
            event.preventDefault();
            gestureStartZoomRef.current = zoomRef.current;
        };
        const handleGestureChange = (event: Event) => {
            event.preventDefault();
            const gesture = event as WebKitGestureEvent;
            zoomAround(
                gestureStartZoomRef.current * gesture.scale,
                gesture.clientX,
                gesture.clientY,
            );
        };
        const preventGestureEnd = (event: Event) => event.preventDefault();

        viewport.addEventListener("wheel", handleWheel, { passive: false });
        viewport.addEventListener("gesturestart", handleGestureStart, { passive: false });
        viewport.addEventListener("gesturechange", handleGestureChange, { passive: false });
        viewport.addEventListener("gestureend", preventGestureEnd, { passive: false });
        return () => {
            viewport.removeEventListener("wheel", handleWheel);
            viewport.removeEventListener("gesturestart", handleGestureStart);
            viewport.removeEventListener("gesturechange", handleGestureChange);
            viewport.removeEventListener("gestureend", preventGestureEnd);
        };
    }, [selected, viewportElement, commitView, zoomAround]);

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
                black keeps the surround quiet without swallowing the frame. */}
            <ModalOverlay bg="#4a4a4a" />
            <ModalContent
                bg="transparent"
                boxShadow="none"
                m={0}
                onClick={onClose}
                aria-label={selected.photo.caption || "Photo, full size"}
            >
                <ModalBody
                    ref={captureViewport}
                    data-testid="photo-lightbox-viewport"
                    p={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="100vh"
                    overflow="hidden"
                    sx={{ touchAction: "none", overscrollBehavior: "contain" }}
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
                            ref={frameRef}
                            data-testid="photo-lightbox-frame"
                            data-zoom={zoom}
                            position="relative"
                            lineHeight={0}
                            // Pixel widths, deliberately. Sizing in vh/vw pinned the
                            // photo to a fixed share of the screen, which cancelled
                            // browser zoom out entirely. In px the browser can scale
                            // it up and the modal container scrolls to let you pan.
                            // Landscape gets proportionally more than portrait: it is
                            // short-edged, so matching portrait's width would read as
                            // the smaller of the two.
                            w={`min(92vw, ${isLandscape ? 620 : 400}px)`}
                            transform={`translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`}
                            transformOrigin="center"
                            transition={zoom === MIN_ZOOM ? "transform 120ms ease-out" : undefined}
                            willChange="transform"
                            sx={{
                                ...(aspect ? { aspectRatio: aspect } : {}),
                                // Mirrors the column's skeleton: a soft pulse tells you
                                // the sharper original is still on its way, without
                                // hiding the preview that is already on screen.
                                ...(fullLoaded
                                    ? {}
                                    : {
                                        outline: "2px solid rgba(255,255,255,0.5)",
                                        outlineOffset: "0px",
                                        animation: `${loadingPulse} 1.1s ease-in-out infinite`,
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
                                srcSet={selected.previewSrcSet}
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
