import { Text, Box, useColorModeValue, Flex, Stack, Image, useBreakpointValue, Hide } from "@chakra-ui/react"

const EmploymentCard = ({ website, title, role, image, alt, date, description }: { website: string, title: string, role: string, image: string, alt: string, date: string, description: string }) => {
  return (
    <Box className="employment-card"
      as="a"
      target={"_blank"}
      href={website}
      p={'0.5rem'}
      pt={{ base: '6', md: '0.5rem' }}
      margin="auto"
      mt={10}
      maxW={{ base: '90%', md: '80%' }}
      w={'full'}
      shadow='lg'
      borderWidth='1px'
      rounded='lg'
      bg={useColorModeValue('gray.50', 'gray.700')}>
      <Flex justify='left' direction={{ base: 'column', md: 'row' }}>

        <Box>
          <Image
            borderRadius='2xl'
            maxWidth={'150px'}
            bg={useColorModeValue('gray.300', 'gray.700')}
            p='2'
            src={image}
            alt={alt}
          />
        </Box>

        <Stack pl='5' spacing='1'>
          <Flex w='100%' justify='flex-start' align='center' direction={{ base: 'column', md: 'row' }}>
            <Text fontSize='1.7rem' fontWeight='bold' pt={{ base: '1rem', md: '0' }} >
              {title}
            </Text>
            <Hide below='md'>
              <Text fontSize='1.6rem' px='6'>|</Text>
            </Hide>
            <Text fontSize='1.2rem'>
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