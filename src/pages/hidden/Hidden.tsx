import { Text, Link, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Helmet } from 'react-helmet';

const Hidden = () => {
  return (
    <div>
      <Helmet>
        <title>biojameskim | Hidden</title>
      </Helmet>

      <Text as='h1' className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} px='3' >
        Some things about me.
      </Text>

      <Text as='h2' fontSize='lg' align='center' my='3vh'>
        <b>1.</b> I come from a family of bloggers.
      </Text>
      <Flex flexDirection='column' gap='2' mb='5vh'>
        <Link href='https://biokimcom.tistory.com/' isExternal>
          Dad's Website/Blog <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='https://www.biojaeson.com/' isExternal>
          Bro's Website <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='https://vsco.co/biojaeson/journal/p/1' isExternal>
          Bro's Vsco Journals <ExternalLinkIcon mx='2px' />
        </Link>
      </Flex>

      {/* <Text as='h2' fontSize='lg' align='center' my='3vh'>
        <b>2.</b>
      </Text> */}
    </div>
  )
}

export default Hidden