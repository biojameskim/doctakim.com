import { VStack, Text } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div>
      <Helmet>
            <title>doctakim | Projects</title>
        </Helmet>
      <VStack
        spacing='3vh'
      >
        <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'6vh'} >
          Projects
        </Text>
        <Text fontSize='2rem' pb={'2vh'}>
          Coming soon... 
        </Text>
      </VStack>
      
    </div>
  )
}

export default Projects