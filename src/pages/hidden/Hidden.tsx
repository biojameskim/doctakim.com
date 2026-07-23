import { Box, Heading, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Helmet } from 'react-helmet-async';

const Hidden = () => {
  const mutedColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <div>
      <Helmet>
        <title>biojameskim | Hidden</title>
      </Helmet>

      <Box maxW={{ base: '100%', md: '90%', lg: '85%' }} mx='auto'>
        <Heading as='h1' textAlign='center' fontSize={{ base: '2.2rem', md: '2.6rem' }} fontWeight={'medium'} pt={'8vh'} pb={{ base: '2vh', md: '4vh' }} >
          ...
        </Heading>

        <VStack align='flex-start' spacing='6' maxW={{ base: '90%', md: '440px' }} mx='auto' mb='10vh'>
          <Box>
            <Text as='h2' fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight='normal'>
              <b>1.</b> I come from a family of bloggers.
            </Text>
            <VStack align='flex-start' spacing='1' mt='2' pl='5'>
              <Link href='https://biokimcom.tistory.com/' isExternal fontSize={{ base: '0.8rem', md: '0.85rem' }} color={mutedColor}>
                Dad's Website/Blog <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://www.biojaeson.com/' isExternal fontSize={{ base: '0.8rem', md: '0.85rem' }} color={mutedColor}>
                Bro's Website <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://vsco.co/biojaeson/journal/p/1' isExternal fontSize={{ base: '0.8rem', md: '0.85rem' }} color={mutedColor}>
                Bro's Vsco Journals <ExternalLinkIcon mx='2px' />
              </Link>
            </VStack>
          </Box>

          <Box>
            <Text as='h2' fontSize={{ base: '0.9rem', md: '1rem' }} fontWeight='normal'>
              <b>2. ---</b> 
            </Text>
          </Box>
        </VStack>
      </Box>
    </div>
  )
}

export default Hidden