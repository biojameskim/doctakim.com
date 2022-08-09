import { Text, Link, Box, useColorModeValue } from "@chakra-ui/react"

const EmploymentCard = ({ website, title }: {website: string, title: string}) => {
  return (
    <Box className="employment-card"
          as={Link}
          href={website} isExternal
          p={'3em'}
          margin="auto"
          mt={10}
          maxW={'60vw'} 
          w={'full'}
          shadow='lg'
          borderWidth='1px'
          position="relative"
          rounded='lg'
          bg={useColorModeValue('white','gray.900')}>
            <Text>{title}</Text>
    </Box>
  )
}

export default EmploymentCard