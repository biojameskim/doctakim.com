import React from "react";
import { Box, Text, Link, VStack, Divider } from "@chakra-ui/react";
import { BsArrowReturnLeft } from "react-icons/bs";

interface FootnoteRefProps {
    index: number;
    id: string;
}

export const FootnoteRef = ({ index, id }: FootnoteRefProps) => {
    return (
        <Box as="sup" id={`ref-${id}`} scrollMarginTop={{ base: "30vh", md: "25vh" }}>
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`fn-${id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                cursor="pointer"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
                fontWeight="bold"
                fontSize="xs"
                p={0.5}
            >
                {index}
            </Link>
        </Box>
    );
};

export const FootnotesSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box as="section">
            <Divider mt={"20vh"} mb={4} />
            <VStack align="start" spacing={3}>
                {children}
            </VStack>
        </Box>
    );
};

interface FootnoteItemProps {
    index: number;
    id: string;
    children: React.ReactNode;
}

export const FootnoteItem = ({ index, id, children }: FootnoteItemProps) => {
    return (
        <Box id={`fn-${id}`} display="flex" flexDirection="row" fontSize="sm">
            <Text as="span" mr={2} fontWeight="bold" minW="20px">
                {index}.
            </Text>
            <Box>
                {children}
                <Link
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(`ref-${id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    cursor="pointer"
                    ml={1}
                    color="blue.500"
                    aria-label="Back to content"
                    display="inline-flex"
                    alignItems="center"
                >
                    <BsArrowReturnLeft size="14px" />
                </Link>
            </Box>
        </Box>
    );
};
