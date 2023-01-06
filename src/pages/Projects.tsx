import { Flex, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
// import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Text fontSize='1.7rem' mt='3rem'>Coming Soon... </Text>
      <Text fontSize='1.3rem' mt='3.5rem'>
        In the meantime, check out my <a href="https://github.com/doctakim" target="_blank"><u>Github</u> !</a>
      </Text>

    </div>
  )
}

export default Projects