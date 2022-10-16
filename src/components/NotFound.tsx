import { Text } from "@chakra-ui/react"
import { Link as LinkRouter } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Text align='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} mb='0' pb='0'>
        Oops!
      </Text>
      <Text align='center' fontSize='3rem' fontWeight='medium' mt='0' pt='0'>
        You seem to be lost.
      </Text>
      <LinkRouter to="/home">
        <Text align='center' fontSize='6rem' fontWeight='bold' mt='4vh'>
          🏠
        </Text>
      </LinkRouter>
      <LinkRouter to="/home">
        <Text align='center' fontSize='2rem' fontWeight='bold' mt='-6'>
          Go Home
        </Text>
      </LinkRouter>
    </div>

  )
}

export default NotFound