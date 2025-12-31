import { Helmet } from "react-helmet";
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
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { photoFolders } from "../data/gallery-folders";
import BlogImage from "../components/blog/BlogImage";

const Gallery = () => {
    const { year, month, subfolder } = useParams();
    const navigate = useNavigate();
    const hoverBg = useColorModeValue("gray.50", "gray.700");

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
                                                    src={photo.filename.startsWith('http') ? photo.filename : `/gallery/${selectedFolder?.year}/${selectedFolder?.month}/${photo.filename}`}
                                                    alt={photo.caption || `Photo ${index + 1}`}
                                                    caption={photo.caption}
                                                    orientation={photo.orientation}
                                                    maxW={photo.maxW}
                                                    borderRadius="none"
                                                    captionFontFamily="monospace"
                                                />
                                            </VStack>))}
                                    </SimpleGrid>
                                ) : (
                                    <Text>Nothing in this folder yet.</Text>
                                )}
                            </Box>
                        ) : selectedFolder ? (
                            <Box w="100%">
                                <Heading as="h2" fontWeight="semibold" fontSize={{ base: "1.2rem", md: "1.4rem" }} mb={6}>
                                    {selectedFolder.month}-{selectedFolder.year}
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
                                                >
                                                    <Image src="/images/icons/papers.png" boxSize={8} />
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
                                                    src={photo.filename.startsWith('http') ? photo.filename : `/gallery/${selectedFolder?.year}/${selectedFolder?.month}/${photo.filename}`}
                                                    alt={photo.caption || `Photo ${index + 1}`}
                                                    caption={photo.caption}
                                                    orientation={photo.orientation}
                                                    maxW={photo.maxW}
                                                    borderRadius="none"
                                                    captionFontFamily="monospace"
                                                />
                                            </VStack>))}
                                    </SimpleGrid>
                                ) : (
                                    !selectedFolder.subfolders || selectedFolder.subfolders.length === 0 ? <Text>Nothing in this folder yet.</Text> : null
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
                                                    css={{ WebkitTapHighlightColor: "transparent" }}
                                                >
                                                    <Image src="/images/icons/file-folder.png" boxSize={{ base: 8, md: 16 }} />
                                                    <Text fontSize={{ base: "0.9rem", md: "0.9rem" }} fontWeight="normal">
                                                        {folder.month}-{folder.year}
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
                                            >
                                                <Image src="/images/icons/file-folder.png" boxSize={16} />
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
        </div>
    );
};

export default Gallery;
