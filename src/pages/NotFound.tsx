import { Text } from "@chakra-ui/react"
import { Link as LinkRouter } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Text align='center' fontSize='2.5rem' fontWeight={'medium'} pt={'14vh'} mb='0' pb='0'>
        Oops!
      </Text>
      <LinkRouter to="/home">
        <Text align='center' fontSize='6rem' fontWeight='bold' mt='4vh'>
          🏠
        </Text>
      </LinkRouter>
      <Text align='center' fontSize='1.5rem' fontWeight='' mt='0' pt='0'>
        Let's go back home.
      </Text>
    </div>

  )
}

export default NotFound