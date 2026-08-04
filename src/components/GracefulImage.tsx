import React, { useState } from "react";
import { Image, ImageProps, Skeleton, Box, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

interface GracefulImageProps extends Omit<ImageProps, 'src'> {
    src: string | object;
    // A density-descriptor srcset ("url 1x, url 2x, url 3x") of WebP variants. When
    // present the image renders inside a <picture> so browsers without WebP support
    // fall back to `fallbackSrc`. Absent for any photo whose month has not been
    // migrated yet, in which case rendering is unchanged.
    webpSrcSet?: string;
    // The original JPEG/PNG, used as the <picture> fallback. Only consulted when
    // `webpSrcSet` is set.
    fallbackSrc?: string;
    // Natural pixel dimensions of the source, passed to the <img> as HTML attributes
    // (not CSS) so the browser can reserve layout from the real aspect ratio.
    // Deliberately kept separate from `height`/`h`, which drive the fixed-size mode
    // below — routing a 4032px intrinsic height through those would produce a
    // 4032px-tall wrapper.
    intrinsicWidth?: number;
    intrinsicHeight?: number;
    // When set, the image becomes an activatable control that opens the lightbox.
    // Keyboard users get the same affordance as pointer users.
    onImageClick?: (trigger: HTMLElement) => void;
    imageClickLabel?: string;
}

const GracefulImage = (props: GracefulImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const {
        src, alt, width, height, w, h, boxSize, borderRadius, objectFit,
        webpSrcSet, fallbackSrc, intrinsicWidth, intrinsicHeight,
        onImageClick, imageClickLabel,
        ...rest
    } = props;
    const resolvedSrc = useBreakpointValue(typeof src === 'object' ? src : { base: src });

    const skeletonStartColor = useColorModeValue("gray.200", "gray.800");
    const skeletonEndColor = useColorModeValue("gray.500", "gray.500");

    // Determine if we have a fixed height/boxSize to enforce dimensions
    const hasFixedDimensions = boxSize || height || h;
    const boxWidth = boxSize || width || w;
    const boxHeight = boxSize || height || h;

    const hasIntrinsicSize = Boolean(intrinsicWidth && intrinsicHeight);

    // Applied to the wrapper rather than the <img> so the whole framed area is the
    // target, and so <picture> stays a plain layout element.
    const clickableProps = onImageClick
        ? {
            onClick: (event: React.MouseEvent<HTMLElement>) =>
                onImageClick(event.currentTarget),
            onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onImageClick(event.currentTarget);
                }
            },
            role: "button",
            tabIndex: 0,
            "aria-label": imageClickLabel || "Open photo full size",
            cursor: "pointer",
            css: { WebkitTapHighlightColor: "transparent" },
        }
        : {};

    // When a WebP srcset exists the <img> src becomes the original, which only
    // browsers that skipped the <source> will actually fetch.
    const renderImage = (extra?: ImageProps) => (
        <Image
            src={(webpSrcSet ? fallbackSrc ?? resolvedSrc : resolvedSrc) as string}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            opacity={isLoaded ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
            htmlWidth={intrinsicWidth}
            htmlHeight={intrinsicHeight}
            objectFit={objectFit}
            {...extra}
            {...rest}
        />
    );

    // <picture> is inline by default; force it to behave like the <img> it wraps so the
    // surrounding width / fit-content layout is unaffected.
    const withPicture = (image: JSX.Element) =>
        webpSrcSet ? (
            <picture style={{ display: "block", width: "100%" }}>
                <source type="image/webp" srcSet={webpSrcSet} />
                {image}
            </picture>
        ) : image;

    if (hasFixedDimensions) {
        return (
            <Box
                position="relative"
                width={boxWidth}
                height={boxHeight}
                borderRadius={borderRadius}
                overflow="hidden"
                className="graceful-image-wrapper-fixed"
            >
                <Skeleton
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    isLoaded={isLoaded}
                    fadeDuration={0.5}
                    startColor={skeletonStartColor}
                    endColor={skeletonEndColor}
                />
                {withPicture(renderImage({
                    width: "100%",
                    height: "100%",
                    objectFit: objectFit || "cover",
                }))}
            </Box>
        );
    }

    // Intrinsic mode: Wrapper fits content, Image drives size
    return (
        <Box
            position="relative"
            width={boxWidth || "fit-content"}
            minHeight={rest.minH || rest.minHeight}
            borderRadius={borderRadius}
            overflow="hidden"
            className="graceful-image-wrapper-intrinsic"
            sx={hasIntrinsicSize ? { aspectRatio: `${intrinsicWidth} / ${intrinsicHeight}` } : undefined}
            {...clickableProps}
        >
            <Skeleton
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                isLoaded={isLoaded}
                fadeDuration={0.5}
                startColor={skeletonStartColor}
                endColor={skeletonEndColor}
            />
            {withPicture(renderImage())}
        </Box>
    );
};

export default GracefulImage;
