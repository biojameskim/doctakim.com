import { Box, Grid, Heading } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';

import { birthday_data } from "../../data/birthday_data"
import BirthdayCard from "../../components/blog/BirthdayCard"

const Birthdays = () => {
  return (
    <div>
      <Helmet>
        <title>biojameskim | Birthdays</title>
      </Helmet>

      <Box w='full'>
        <Heading textAlign='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '6vh' }} >
          Birthdays
        </Heading>
        <Grid w={{ base: 'full', md: '70%' }} templateColumns={{ md: 'repeat(3, 1fr)' }} gap='6' pb='10vh'>
          {birthday_data.map((item, index) =>
            <BirthdayCard
              key={index}
              title={item.title}
              date={item.date}
              route={item.route}
            />
          )}
        </Grid>
      </Box>
    </div>
  )
}

export default Birthdays