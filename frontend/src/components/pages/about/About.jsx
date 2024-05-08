import React from 'react'
import { Slide, Box, Text } from '@chakra-ui/react'

const About = ({ isOpen }) => {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="teal.600" rounded="md" shadow="md">
        <Text>this project is made by Mohammed Ameen</Text>
      </Box>
    </Slide>
  )
}

export default About
