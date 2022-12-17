import { Text } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
// import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Projects</title>
      </Helmet>
      <Text fontSize='1.5rem' mt='4rem'>Coming Soon... </Text>

    </div>
  )
}

export default Projects