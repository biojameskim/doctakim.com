import { Box, Text, useColorModeValue } from "@chakra-ui/react"

const CourseworkCard = ({ courseTitle, courseNumber, affiliation }: { courseTitle: string, courseNumber: string, affiliation: string }) => {
  return (
    <Box className="coursework-card"
      p={'0.5rem'}
      pt={{ base: '0.5rem', md: '0.5rem' }}
      margin="auto"
      my={5}
      maxW={{ base: '90%', md: '80%' }}
      w={'full'}
      shadow='lg'
      borderWidth='1px'
      rounded='lg'
      bg={useColorModeValue('gray.50', 'gray.700')}>
      <Text
        align='left'
        fontSize='1.1rem'
        fontWeight='bold'
      >
        {courseTitle}
      </Text>
      <Text
        align='left'
        fontSize='1rem'>
        {courseNumber}
      </Text>
      <Text
        align='left'
        fontSize='1rem'
        color='gray.500'>
        {affiliation}
      </Text>
    </Box>
  )
}

export default CourseworkCard