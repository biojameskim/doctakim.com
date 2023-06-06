import { VStack, Box } from "@chakra-ui/react"
import EmploymentCard from '../../components/experience/EmploymentCard'
import { useEffect } from "react";

import employment_data from "../../data/employment_data"

const Employment = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <VStack
        spacing='3vh'
      >
        {employment_data.map((item, index) =>
          <EmploymentCard
            key={index}
            company={item.company}
            website={item.website}
            role={item.role}
            image={item.image}
            alt={item.alt}
            date={item.date}
            description={item.description}
          />
        )}

      </VStack>
      <Box pb='6vh'></Box>
    </div>

  )
}

export default Employment