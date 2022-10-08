import { VStack, Text, Box } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import ExperiencesCard from './ExperiencesCard'
import WazzleLogo from "../images/logos/wazzle.jpeg"
import HackLogo from "../images/logos/hack4impact.jpeg"

const Experiences = () => {
  return (
    <div>
      <Helmet>
        <title>doctakim | Experiences</title>
      </Helmet>
      <VStack
        spacing='3vh'
      >
        <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'6vh'} >
          Experiences
        </Text>

        <ExperiencesCard
          website='https://cornellh4i.org/'
          title='hack4impact'
          role='Full Stack Developer'
          image={HackLogo}
          alt='hack4impact Logo'
          date='09/2022 - Present'
          description='Building a platform for the homeless population of 
          Tompkins County to browse for available and affordable housing using 
          MongoDB, Express.js, React, and Node.js'
        />

        <ExperiencesCard
          website='https://wazzle.app'
          title='Wazzle'
          role='Mobile Development Intern'
          image={WazzleLogo}
          alt='Wazzle Logo'
          date='04/2022 - 08/2022'
          description='Implemented new features and design changes for an iOS 
          application that allows for more meaningful contact management for over 5000 users'
        />

      </VStack>
      <Box pb='6vh'></Box>
    </div>

  )
}

export default Experiences