import { Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <Text align='center' fontSize='1.5rem' fontWeight={'semibold'} pt={'14vh'} mb='0' pb='0'>
        Oops!
      </Text>
      <Link to="/home" style={{ WebkitTapHighlightColor: "transparent", display: "block" }}>
        <Box
          as="img"
          src="/images/icons/home-sm.png"
          boxSize={{ base: 24, md: 24 }}
          mx='auto'
          my='2rem'
          _hover={{ cursor: "pointer", opacity: { base: 1, md: 0.8 } }}
          _active={{ opacity: 1 }}
          css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
        />
      </Link>
      <Text align='center' fontSize='0.9rem' fontWeight='normal' mt='0' pt='0'>
        Let's go back home.
      </Text>
    </div>

  )
}

export default NotFound