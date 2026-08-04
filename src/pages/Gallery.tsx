import { Helmet } from "react-helmet-async";
import { useLayoutEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Button,
    useColorModeValue,
    Flex,
    Image,
    ImageProps,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { photoFolders } from "../data/gallery";
import type { Photo, PhotoFolder } from "../data/gallery";
import BlogImage from "../components/blog/BlogImage";
import SEO from "../components/SEO";
import PhotoLightbox, { LightboxPhoto } from "../components/gallery/PhotoLightbox";

// Builds the image props for one photo. Photos whose month has not been migrated yet
// have no `responsive` block, so they return a bare `src` and render exactly as before.
const photoSources = (photo: Photo, folder: PhotoFolder | null) => {
    const src = photo.filename.startsWith("http")
        ? photo.filename
        : `/gallery/${folder?.year}/${folder?.month}/${photo.filename}`;
    const responsive = photo.responsive;

    if (!responsive) return { src };

    return {
        src,
        // `filename` is the 1x WebP once migrated, so it leads the density set.
        webpSrcSet: `${src} 1x, ${responsive.src2x} 2x, ${responsive.src3x} 3x`,
        fallbackSrc: responsive.originalSrc,
        intrinsicWidth: responsive.intrinsicWidth,
        intrinsicHeight: responsive.intrinsicHeight,
    };
};

type GalleryIconProps = {
    src: string;
    boxSize: ImageProps["boxSize"];
};

const GalleryIcon = ({ src, boxSize }: GalleryIconProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            src={src}
            boxSize={boxSize}
            loading="eager"
            decoding="sync"
            opacity={isLoaded ? 1 : 0}
            transition="opacity 100ms ease-out"
            onLoad={() => setIsLoaded(true)}
        />
    );
};

const Gallery = () => {
    const { year, month, subfolder } = useParams();
    const navigate = useNavigate();
    const hoverBg = useColorModeValue("gray.50", "gray.700");

    const [lightboxPhoto, setLightboxPhoto] = useState<LightboxPhoto | null>(null);
    // Closing the lightbox must put focus back on the photo that opened it, so a
    // keyboard user does not get dropped at the top of the page.
    const lightboxTrigger = useRef<HTMLElement | null>(null);

    // Navigating between folders resets scroll and dismisses any open photo.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setLightboxPhoto(null);
    }, [year, month, subfolder]);

    const selectedYear = year ? parseInt(year) : null;
    const selectedFolder = selectedYear && month
        ? photoFolders.find(f => f.year === selectedYear && f.month === month) || null
        : null;

    const selectedSubfolder = selectedFolder && subfolder
        ? selectedFolder.subfolders?.find(s => s.name === subfolder) || null
        : null;

    const handleYearClick = (year: number) => {
        navigate(`/gallery/${year}`);
    };

    const handleFolderClick = (folderMonth: string) => {
        navigate(`/gallery/${selectedYear}/${folderMonth}`);
    };

    const handleSubfolderClick = (subfolderName: string) => {
        navigate(`/gallery/${selectedYear}/${month}/${subfolderName}`);
    };

    const handleBackClick = () => {
        if (selectedSubfolder) {
            navigate(`/gallery/${selectedYear}/${month}`);
        } else if (selectedFolder) {
            navigate(`/gallery/${selectedYear}`);
        } else if (selectedYear) {
            navigate("/gallery");
        }
    };

    // Get unique years
    const years = Array.from(new Set(photoFolders.map(folder => folder.year))).sort((a, b) => b - a);

    // Filter folders by selected year
    const filteredFolders = selectedYear
        ? photoFolders.filter(folder => folder.year === selectedYear)
        : [];

    const showBackButton = selectedFolder || selectedYear || selectedSubfolder;
    const backButtonText = "Back";

    return (
        <div>
            <Helmet>
                <title>biojameskim | Gallery</title>
            </Helmet>
            <SEO title="biojameskim | Gallery" description="Photos from James Kim." url="/gallery" />

            <Box>

                <Container maxW="container.lg" pb={{ base: 20, md: 10 }} pt={{ base: 28, md: 28 }} minH="calc(100vh - 100px)" display="flex" flexDirection="column" position="relative">
                    {showBackButton && (
                        <Button
                            leftIcon={<FaArrowLeft />}
                            variant="ghost"
                            position="absolute"
                            top={{ base: 22, md: 14 }}
                            left={{ base: 2, md: 0 }}
                            onClick={handleBackClick}
                            borderRadius="full"
                            px={4}
                            _hover={{ base: { bg: "transparent" }, md: { bg: hoverBg } }}
                            _active={{ base: { bg: "transparent" }, md: {} }}
                            css={{ WebkitTapHighlightColor: "transparent" }}
                        >
                            {backButtonText}
                        </Button>
                    )}
                    <VStack spacing={8} w="100%">
                        {selectedSubfolder ? (
                            <Box w="100%">
                                <Heading as="h2" fontWeight="normal" fontSize={{ base: "1.1rem", md: "1.2rem" }} mb={6}>
                                    {selectedSubfolder.name}
                                </Heading>
                                {selectedSubfolder.photos && selectedSubfolder.photos.length > 0 ? (
                                    <SimpleGrid columns={1} spacing={0}>
                                        {selectedSubfolder.photos.map((photo, index) => (
                                            <VStack key={index} w="100%">
                                                <BlogImage
                                                    {...photoSources(photo, selectedFolder)}
                                                    alt={photo.caption || `Photo ${index + 1}`}
                                                    caption={photo.caption}
                                                    captionLink={photo.captionLink}
                                                    orientation={photo.orientation}
                                                    maxW={photo.maxW}
                                                    borderRadius="none"
                                                    captionFontFamily="monospace"
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                    decoding="async"
                                                    onImageClick={(trigger) => {
                                                        lightboxTrigger.current = trigger;
                                                        setLightboxPhoto({
                                                            photo,
                                                            // The 2x variant is already
                                                            // cached by the grid, so it
                                                            // stands in instantly.
                                                            previewSrc:
                                                                photo.responsive?.src2x ??
                                                                photoSources(photo, selectedFolder).src,
                                                            alt: photo.caption || `Photo ${index + 1}`,
                                                        });
                                                    }}
                                                    imageClickLabel={`Open photo ${index + 1} full size`}
                                                />
                                            </VStack>))}
                                    </SimpleGrid>
                                ) : (
                                    <Text>Nothing here yet.</Text>
                                )}
                            </Box>
                        ) : selectedFolder ? (
                            <Box w="100%">
                                <Heading as="h2" fontWeight="semibold" fontSize={{ base: "1.2rem", md: "1.4rem" }} mb={6}>
                                    {selectedFolder.month}-{selectedFolder.year.toString().slice(-2)}
                                </Heading>

                                {selectedFolder.subfolders && selectedFolder.subfolders.length > 0 && (
                                    <VStack spacing={4} w="100%" align="center" mb={8}>
                                        {selectedFolder.subfolders.map((sub, index) => (
                                            <Box key={index} display="flex" justifyContent="flex-start" alignItems="center" w="100%">
                                                <Flex
                                                    direction="row"
                                                    p={{ base: 2, md: 4 }}
                                                    borderRadius="none"
                                                    _hover={{ base: { cursor: "pointer" }, md: { bg: hoverBg, cursor: "pointer" } }}
                                                    transition="all 0.2s"
                                                    onClick={() => handleSubfolderClick(sub.name)}
                                                    gap={{ base: 1.5, md: 2 }}
                                                    align="center"
                                                    justify="flex-start"
                                                    w="fit-content"
                                                    css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
                                                >
                                                    <GalleryIcon src="/images/icons/binder-sm.png" boxSize={8} />
                                                    <Text fontWeight="normal" fontSize={{ base: "0.9rem", md: "1rem" }}>
                                                        {sub.name}
                                                    </Text>
                                                </Flex>
                                            </Box>
                                        ))}
                                    </VStack>
                                )}

                                {selectedFolder.photos.length > 0 ? (
                                    <SimpleGrid columns={1} spacing={0}>
                                        {selectedFolder.photos.map((photo, index) => (
                                            <VStack key={index} w="100%">
                                                <BlogImage
                                                    {...photoSources(photo, selectedFolder)}
                                                    alt={photo.caption || `Photo ${index + 1}`}
                                                    caption={photo.caption}
                                                    captionLink={photo.captionLink}
                                                    orientation={photo.orientation}
                                                    maxW={photo.maxW}
                                                    borderRadius="none"
                                                    captionFontFamily="monospace"
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                    decoding="async"
                                                    onImageClick={(trigger) => {
                                                        lightboxTrigger.current = trigger;
                                                        setLightboxPhoto({
                                                            photo,
                                                            // The 2x variant is already
                                                            // cached by the grid, so it
                                                            // stands in instantly.
                                                            previewSrc:
                                                                photo.responsive?.src2x ??
                                                                photoSources(photo, selectedFolder).src,
                                                            alt: photo.caption || `Photo ${index + 1}`,
                                                        });
                                                    }}
                                                    imageClickLabel={`Open photo ${index + 1} full size`}
                                                />
                                            </VStack>))}
                                    </SimpleGrid>
                                ) : (
                                    !selectedFolder.subfolders || selectedFolder.subfolders.length === 0 ? <Text>Nothing here yet.</Text> : null
                                )}
                            </Box>
                        ) : selectedYear ? (
                            <Box w={{ base: "100%", md: "85%" }}>
                                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} w="100%">
                                    {filteredFolders.length > 0 ? (
                                        filteredFolders.map((folder, index) => (
                                            <Box key={index} display="flex" justifyContent={{ base: "flex-start", md: "center" }} alignItems="center">
                                                <Flex
                                                    direction={{ base: 'row', md: 'column' }}
                                                    p={{ base: 2, md: 4 }}
                                                    borderRadius="none"
                                                    _hover={{ base: { cursor: "pointer" }, md: { bg: hoverBg, cursor: "pointer" } }}
                                                    transition="all 0.2s"
                                                    onClick={() => handleFolderClick(folder.month)}
                                                    gap={{ base: 1.5, md: 2 }}
                                                    align={{ base: "center", md: "center" }}
                                                    justify="center"
                                                    w="fit-content"
                                                    css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
                                                >
                                                    <GalleryIcon src="/images/icons/file-folder.png" boxSize={{ base: 8, md: 16 }} />
                                                    <Text fontSize={{ base: "0.9rem", md: "0.9rem" }} fontWeight="normal">
                                                        {folder.month}-{folder.year.toString().slice(-2)}
                                                    </Text>
                                                </Flex>
                                            </Box>
                                        ))
                                    ) : (
                                        <Text>No folders for this year.</Text>
                                    )}
                                </SimpleGrid>
                            </Box>
                        ) : (
                            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w={{ base: "100%", md: "85%" }}>
                                {years.length > 0 ? (
                                    years.map((year, index) => (
                                        <Box key={index} display="flex" justifyContent="center" alignItems="center">
                                            <VStack
                                                p={4}
                                                borderRadius="none"
                                                _hover={{ base: { cursor: "pointer" }, md: { bg: hoverBg, cursor: "pointer" } }}
                                                transition="all 0.2s"
                                                onClick={() => handleYearClick(year)}
                                                spacing={2}
                                                align="center"
                                                justify="center"
                                                w="fit-content"
                                                css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
                                            >
                                                <GalleryIcon src="/images/icons/file-folder.png" boxSize={16} />
                                                <Text fontSize={{ base: "0.9rem", md: "0.9rem" }} fontWeight="normal">
                                                    {year}
                                                </Text>
                                            </VStack>
                                        </Box>
                                    ))
                                ) : (
                                    <Text>No photos available.</Text>
                                )}
                            </SimpleGrid>
                        )}
                    </VStack>
                </Container>
            </Box>

            <PhotoLightbox
                selected={lightboxPhoto}
                onClose={() => setLightboxPhoto(null)}
                triggerRef={lightboxTrigger}
            />
        </div>
    );
};

export default Gallery;
