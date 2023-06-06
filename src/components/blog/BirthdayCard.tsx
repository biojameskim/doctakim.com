import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { BirthdayCardType } from "../../types/BlogTypes"
import { Link as LinkRouter } from 'react-router-dom'

const BirthdayCard = ({ title, date, route }: BirthdayCardType) => {
  return (
    <LinkRouter to={route} className="birthday-card-link">
      <Flex
        className="hover-card"
        justify='space-between'
        p={'0.5rem'}
        pt={{ base: '0.5rem', md: '0.5rem' }}
        maxW={{ base: '90%', md: '100%' }}
        w='100%'
        shadow='lg'
        borderWidth='1px'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        rounded='lg'
        bg={useColorModeValue('gray.50', 'gray.700')}
      >
        <Text
          align='left'
          fontSize='1.1rem'
          fontWeight='bold'
        >
          {title}
        </Text>
        <Text
          align='left'
          fontSize='1rem'
          color='gray.500'>
          {date}
        </Text>
      </Flex>
    </LinkRouter>
  )
}

export default BirthdayCard