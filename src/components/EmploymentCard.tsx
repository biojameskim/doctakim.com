import { Text, Box, useColorModeValue, Flex, VStack, Image, SimpleGrid, GridItem, useBreakpointValue, Hide, Show } from "@chakra-ui/react"

const EmploymentCard = ({ website, title, role, image, alt, date, description }: {website: string, title: string, role: string, image: string, alt: string, date: string, description: string}) => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })
  return (
    <Box className="employment-card"
          as="a"
          target={"_blank"}
          href={website}
          p={'0.5rem'}
          pt={{ base:'6' }}
          margin="auto"
          mt={10}
          maxW={'80%'} 
          w={'full'}
          shadow='lg'
          borderWidth='1px'
          position="relative"
          rounded='lg'
          bg={useColorModeValue('gray.100','gray.900')}>
            <Flex direction={{ base: 'column', md: 'row' }}>

              <Box>
                <Image
                borderRadius='2xl'
                bg={useColorModeValue('gray.300','gray.700')}
                p='2'
                src= {image}
                alt={alt}
                />
              </Box>

              <VStack align='left' pl='5' spacing='-1'>

                <Box ml='0' mb='-1.5' mt={{ base: '2', md: '0' }}>
                  <SimpleGrid columns={2}>
                    <GridItem className='grid-employment-title' colSpan={colSpan} ml='0'>
                      <Flex align={'center'}>
                        <Text fontSize='2.5rem' fontWeight='bold'>{title}</Text>
                        <Hide below='md'>
                          <Text fontSize='2rem' px='6'>|</Text>
                          <Text fontSize='1.5rem'>{role}</Text>
                        </Hide>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={colSpan}>
                      <Show below='md'>
                        <Text fontSize='1.5rem' ml='-0.5' mt='-2'>{role}</Text>
                      </Show>
                    </GridItem>
                  </SimpleGrid>
                </Box>

                <Text fontSize='1.5rem' color='gray.500' pb='0.5'>
                  {date}
                </Text>

                <Text fontSize='1.5rem' w='100%'>
                  {description}
                </Text>

              </VStack>
            </Flex>
    </Box>
  )
}

export default EmploymentCard