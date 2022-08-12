import { VStack, Text, Box } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import EmploymentCard from "./EmploymentCard"
import WazzlePic from "../images/logos/wazzle.jpeg"

const Employment = () => {
  return (
    <div>
      <Helmet>
        <title>doctakim | Employment</title>
      </Helmet>
      <VStack
        spacing='3vh'
      >
        <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'6vh'} >
          Employment
        </Text>

        <EmploymentCard
        website='https://wazzle.app'
        title='Wazzle'
        role='Mobile Development Intern'
        image={WazzlePic}
        alt='Wazzle Logo'
        date='04/2022 - 08/2022'
        description='Implemented new features and design changes for an iOS application that allows for more meaningful contact management for over 5000 users'
        />

      </VStack>
      <Box pb='6vh'></Box>
    </div>

  )
}

export default Employment