import React from 'react'
import { Spinner, Stack } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Spinner size="xl" />
    </Stack>
  )
}

export default LoadingPage
