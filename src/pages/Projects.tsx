import { VStack, Text } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Projects</title>
      </Helmet>
      <VStack
        spacing='3vh'
      >
        <ProjectCard
          title="Frontier Defense Game"
          website="https://github.com/doctakim/Frontier-Defense-Game"
        />
      </VStack>

    </div>
  )
}

export default Projects