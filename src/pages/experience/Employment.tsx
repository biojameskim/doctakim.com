import { VStack, Box } from "@chakra-ui/react"
import EmploymentCard from '../../components/experience/EmploymentCard'
import { useEffect } from "react";

import employment_data from "../../data/employment_data"

const Employment = () => {
  // Makes an array from [0, ..., N-1] where N is how many employment data we have
  const numbers = Array.from(Array(employment_data.length).keys());

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <VStack
        spacing='3vh'
      >
        {numbers.map(n =>
          <EmploymentCard
            key={n}
            company={employment_data[n].company}
            website={employment_data[n].website}
            role={employment_data[n].role}
            image={employment_data[n].image}
            alt={employment_data[n].alt}
            date={employment_data[n].date}
            description={employment_data[n].description}
          />
        )}

      </VStack>
      <Box pb='6vh'></Box>
    </div>

  )
}

export default Employment