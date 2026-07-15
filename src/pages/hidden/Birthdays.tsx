import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { Link as LinkRouter } from 'react-router-dom'

import { birthday_data } from "../../data/birthday_data"

const Birthdays = () => {
  return (
    <div>
      <Helmet>
        <title>biojameskim | Birthdays</title>
      </Helmet>

      <Box maxW={{ base: '100%', md: '90%', lg: '85%' }} mx='auto'>
        <Heading textAlign='center' fontSize={{ base: '2.2rem', md: '2.6rem' }} fontWeight={'medium'} pt={'8vh'} pb={{ base: '2vh', md: '4vh' }} >
          Birthdays
        </Heading>
        <Flex flexDirection='column' gap='2' pb='10vh' align='center'>
          {birthday_data.map((item) => (
            <Link as={LinkRouter} to={item.route} key={item.route} fontSize={{ base: '0.9rem', md: '1rem' }}>
              {item.title}
              <Text as='span' color='gray.500' ml='2'>
                {item.date}
              </Text>
            </Link>
          ))}
        </Flex>
      </Box>
    </div>
  )
}

export default Birthdays