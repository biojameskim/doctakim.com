import { Box, Flex, Text, Stack, List, ListItem, ListIcon, Grid } from "@chakra-ui/react"
import { BsCircle } from 'react-icons/bs'
import CourseworkCard from "../components/CourseworkCard"
import { useEffect } from "react";

import { coursework } from "../data/coursework";

const Coursework = () => {
  // Makes an array from [0, ..., N-1] where N is how many coursework data we have
  const numbers = Array.from(Array(coursework.length).keys());

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Flex w={{ base: '100%', md: '100%' }} mt='2rem' direction={{ base: 'column', md: 'column' }}>
        <Flex direction='column' w={{ base: '90%', md: '100%' }} mt='0' align='center' mb='5vh'>
          <Text fontSize='1.5rem' fontWeight='bold' mb='3rem' mt={{ base: '2rem', md: '0' }}>Technical Skills</Text>
          <Flex direction={{ base: 'column', md: 'row' }} w='80%' justifyContent={'space-evenly'} alignContent={'flex-start'}>

            <Flex direction='column' mb='2rem'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold' mb='2vh'>Languages</Text>
              <List spacing='0.5rem'>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='green.500' />
                  Java, Python, OCaml, HTML, CSS
                </ListItem>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='yellow.500' />
                  TypeScript, JavaScript, Swift, SQL, Bash
                </ListItem>
              </List>
            </Flex>

            <Flex direction='column' mb='2rem'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold' mb='2vh'>Frameworks & Libraries</Text>
              <List spacing='0.5rem'>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='green.500' />
                  React, MongoDB, Node.js, Express.js
                </ListItem>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='yellow.500' />
                  Flask, Pandas, NumPy, SQLite, SQLAlchemy
                </ListItem>
              </List>
            </Flex>

            <Flex direction='column' mb='2rem'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold' mb='2vh'>Tools</Text>
              <List spacing='0.5rem'>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='green.500' />
                  Git, Docker, Postman, Linux, XCode
                </ListItem>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='white' />
                  {/* Dummy ListItem because it doesn't align correctly otherwise */}
                </ListItem>
              </List>
            </Flex>

          </Flex>
        </Flex>

        <Box w='full' mt={{ base: '4rem', md: '0' }}>
          <Text fontSize='1.5rem' fontWeight='bold' mb='3rem'>Coursework</Text>
          <Grid w={{ base: '95%', md: '70%' }} templateColumns={{ md: 'repeat(2, 1fr)' }} gap='6' mb='10vh'>
            {numbers.map(n =>
              <CourseworkCard
                key={n}
                courseTitle={coursework[n].courseTitle}
                courseNumber={coursework[n].courseNumber}
                affiliation={coursework[n].affiliation}
              />
            )}
          </Grid>
        </Box>
      </Flex>
    </div>
  )
}

export default Coursework