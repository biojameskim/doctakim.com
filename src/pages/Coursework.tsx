import { Box, Flex, Text, Stack, List, ListItem, ListIcon } from "@chakra-ui/react"
import { BsCircle } from 'react-icons/bs'
import CourseworkCard from "../components/CourseworkCard"
import { useEffect } from "react";

const Coursework = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Flex w={{ base: '100%', md: '80%' }} mt='1.5rem' direction={{ base: 'column', md: 'row' }}>
        <Stack w={{ base: '90%', md: '50%' }} spacing='10' mt='0' align='center'>
          <Text fontSize='1.5rem' fontWeight='bold' mb='0rem' mt={{ base: '2rem', md: '0' }}>Technical Skills</Text>
          <Stack spacing='2rem'>
            <Stack spacing='4' align='left'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold'>Languages</Text>
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
            </Stack>

            <Stack spacing='4' align='left'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold'>Frameworks & Libraries</Text>
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
            </Stack>

            <Stack spacing='4'>
              <Text align='left' fontSize='1.2rem' fontWeight='bold'>Tools</Text>
              <List spacing='0.5rem'>
                <ListItem textAlign='left'>
                  <ListIcon as={BsCircle} color='green.500' />
                  Git, Docker, Postman, Linux, XCode
                </ListItem>
              </List>
            </Stack>
          </Stack>
        </Stack>

        <Box w={{ base: '100%', md: '50%' }} mt={{ base: '4rem', md: '0' }}>
          <Text fontSize='1.5rem' fontWeight='bold' mb='0rem'>Coursework</Text>
          <CourseworkCard
            courseTitle="Data Structures and Functional Programming"
            courseNumber="CS 3110"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Discrete Structures"
            courseNumber="CS 2800"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Object-Oriented Programming and Data Structures"
            courseNumber="CS 2110"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Linear Algebra"
            courseNumber="MATH 2210"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Introduction to Backend Development"
            courseNumber="CS 1998"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Introduction to Computing using Python"
            courseNumber="CS 1110"
            affiliation="Associated with Cornell University"
          />
          <CourseworkCard
            courseTitle="Introductory Design and Programming for the Web"
            courseNumber="INFO 1300"
            affiliation="Associated with Cornell University"
          />
        </Box>
      </Flex>
    </div>
  )
}

export default Coursework