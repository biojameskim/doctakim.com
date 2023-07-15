import { Text, Box, useColorModeValue, Flex, Stack, Image, Hide } from "@chakra-ui/react"
import { EmploymentCardType } from "../../types/ExperienceTypes"

const EmploymentCard = ({ company, website, role, image, alt, date, description }: EmploymentCardType) => {
  return (
    <Box className="employment-card"
      as="a"
      target={"_blank"}
      href={website}
      p={'0.5rem'}
      py={{ base: '6', md: '0.8rem' }}
      mt={10}
      maxW={{ base: '90%', md: '75%' }}
      w={'full'}
      shadow='lg'
      borderWidth='1px'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded='lg'
      bg={useColorModeValue('gray.50', 'gray.700')}>

      <Flex justify='left' direction={{ base: 'column', md: 'row' }} ml='4'>

        <Box>
          <Image
            borderRadius='lg'
            maxWidth={'130px'}
            bg={useColorModeValue('gray.200', 'gray.600')}
            p='4'
            src={image}
            alt={alt}
          />
        </Box>

        <Stack pl='5' spacing='1' w='85%'>
          <Flex w='100%' justify='flex-start' align='center' direction={{ base: 'column', md: 'row' }}>
            <Text fontSize='1.7rem' fontWeight='bold' pt={{ base: '1rem', md: '0' }} textAlign={{ base: 'center' }}>
              {company}
            </Text>
            <Hide below='md'>
              <Text fontSize='1.6rem' px='6'>|</Text>
            </Hide>
            <Text fontSize='1.2rem' textAlign={{ base: 'center' }}>
              {role}
            </Text>
          </Flex>
          <Text fontSize='1.1rem' color='gray.500' pb='0.5' textAlign={{ base: 'center', md: 'left' }}>
            {date}
          </Text>
          <Text fontSize='1rem' w='95%' textAlign={'left'} pb={{ base: '1rem', md: '0' }}>
            {description}
          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}

export default EmploymentCard