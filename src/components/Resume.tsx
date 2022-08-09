import { VStack, Text } from "@chakra-ui/react"

const Resume = () => {
  return (
    <div>
      
      <VStack
        spacing='3vh'
      >
        <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'6vh'} >
          Resume
        </Text>
        <Text fontSize='2rem' pb={'2vh'}>
          Coming soon... 
        </Text>
      </VStack>
      
    </div>
  )
}

export default Resume