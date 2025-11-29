import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Icon,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaFolder, FaArrowLeft } from "react-icons/fa";
import { photoFolders } from "../data/five-things-folders";
import BlogImage from "../components/blog/BlogImage";

const FiveThings = () => {
    const { year, month } = useParams();
    const navigate = useNavigate();

    const folderColor = useColorModeValue("yellow.400", "yellow.200");
    const hoverBg = useColorModeValue("gray.50", "gray.700");

    const selectedYear = year ? parseInt(year) : null;
    const selectedFolder = selectedYear && month
        ? photoFolders.find(f => f.year === selectedYear && f.month === month) || null
        : null;

    const handleYearClick = (year: number) => {
        navigate(`/five/${year}`);
    };

    const handleFolderClick = (folderMonth: string) => {
        navigate(`/five/${selectedYear}/${folderMonth}`);
    };

    const handleBackClick = () => {
        if (selectedFolder) {
            navigate(`/five/${selectedYear}`);
        } else if (selectedYear) {
            navigate("/five");
        }
    };

    // Get unique years
    const years = Array.from(new Set(photoFolders.map(folder => folder.year))).sort((a, b) => b - a);

    // Filter folders by selected year
    const filteredFolders = selectedYear
        ? photoFolders.filter(folder => folder.year === selectedYear)
        : [];

    const showBackButton = selectedFolder || selectedYear;
    const backButtonText = selectedFolder ? "Back" : "Back";

    return (
        <div>
            <Helmet>
                <title>biojameskim | 5 Things</title>
            </Helmet>

            <Box>
                <Heading textAlign='center' fontSize={{ base: '1.6rem', md: '1.8rem' }} fontWeight={'medium'} pt={'8vh'} pb={20} >
                    5 things that made me smile
                </Heading>
                <Container maxW="container.lg" pb={10} pt={0} position="relative">
                    {showBackButton && (
                        <Button
                            leftIcon={<FaArrowLeft />}
                            variant="ghost"
                            position="absolute"
                            top="-60px"
                            left={0}
                            onClick={handleBackClick}
                            borderRadius="full"
                            px={4}
                            _hover={{ bg: hoverBg }}
                        >
                            {backButtonText}
                        </Button>
                    )}
                    <VStack spacing={8}>
                        {selectedFolder ? (
                            <Box w="100%">
                                <Heading as="h2" size="lg" mb={6}>
                                    {selectedFolder.month}-{selectedFolder.year}
                                </Heading>
                                {selectedFolder.photos.length > 0 ? (
                                    <SimpleGrid columns={1} spacing={0}>
                                        {selectedFolder.photos.map((photo, index) => (
                                            <VStack key={index} w="100%">
                                                <BlogImage
                                                    src={`/five_things/${selectedFolder.year}/${selectedFolder.month}/${photo.filename}`}
                                                    alt={photo.caption || `Photo ${index + 1}`}
                                                    caption={photo.caption}
                                                    orientation={photo.orientation}
                                                    maxW={photo.maxW}
                                                />
                                            </VStack>))}
                                    </SimpleGrid>
                                ) : (
                                    <Text>Nothing in this folder yet.</Text>
                                )}
                            </Box>
                        ) : selectedYear ? (
                            <Box w="100%">
                                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%">
                                    {filteredFolders.length > 0 ? (
                                        filteredFolders.map((folder, index) => (
                                            <Box key={index} display="flex" justifyContent="center" alignItems="center">
                                                <VStack
                                                    p={4}
                                                    borderRadius="lg"
                                                    _hover={{ bg: hoverBg, cursor: "pointer", transform: "scale(1.05)" }}
                                                    transition="all 0.2s"
                                                    onClick={() => handleFolderClick(folder.month)}
                                                    spacing={2}
                                                    align="center"
                                                    justify="center"
                                                    w="fit-content"
                                                >
                                                    <Icon as={FaFolder} color={folderColor} boxSize={20} />
                                                    <Text fontSize="lg" fontWeight="medium">
                                                        {folder.month}-{folder.year}
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        ))
                                    ) : (
                                        <Text>No folders for this year.</Text>
                                    )}
                                </SimpleGrid>
                            </Box>
                        ) : (
                            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%">
                                {years.length > 0 ? (
                                    years.map((year, index) => (
                                        <Box key={index} display="flex" justifyContent="center" alignItems="center">
                                            <VStack
                                                p={4}
                                                borderRadius="lg"
                                                _hover={{ bg: hoverBg, cursor: "pointer", transform: "scale(1.05)" }}
                                                transition="all 0.2s"
                                                onClick={() => handleYearClick(year)}
                                                spacing={2}
                                                align="center"
                                                justify="center"
                                                w="fit-content"
                                            >
                                                <Icon as={FaFolder} color={folderColor} boxSize={20} />
                                                <Text fontSize="lg" fontWeight="medium">
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

export default FiveThings;
