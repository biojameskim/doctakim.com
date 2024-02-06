import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
// import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Text fontSize="1.7rem" mt="3rem">
        Coming Soon...{" "}
      </Text>
      <Text fontSize="1.3rem" mt="3.5rem">
        Check out my{" "}
        <a
          href="https://github.com/biojameskim"
          target="_blank"
          rel="noreferrer"
        >
          <u>Github</u> !
        </a>
      </Text>
    </div>
  );
};

export default Projects;
