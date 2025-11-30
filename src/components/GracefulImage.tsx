import { useState } from "react";
import { Image, ImageProps, Skeleton, Box, useColorModeValue } from "@chakra-ui/react";

interface GracefulImageProps extends ImageProps {
    // Add any specific props if needed, for now just extending ImageProps
}

const GracefulImage = (props: GracefulImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { src, alt, width, height, w, h, boxSize, borderRadius, objectFit, ...rest } = props;

    const skeletonStartColor = useColorModeValue("gray.200", "gray.800");
    const skeletonEndColor = useColorModeValue("gray.500", "gray.500");

    // Determine if we have a fixed height/boxSize to enforce dimensions
    const hasFixedDimensions = boxSize || height || h;
    const boxWidth = boxSize || width || w;
    const boxHeight = boxSize || height || h;

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
                <Image
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    opacity={isLoaded ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                    width="100%"
                    height="100%"
                    objectFit={objectFit || "cover"}
                    {...rest}
                />
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
            <Image
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                opacity={isLoaded ? 1 : 0}
                transition="opacity 0.5s ease-in-out"
                objectFit={objectFit}
                {...rest}
            />
        </Box>
    );
};

export default GracefulImage;
