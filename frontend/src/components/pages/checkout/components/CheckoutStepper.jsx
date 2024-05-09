import {
  Step,
  StepIndicator,
  StepStatus,
  Stepper,
  useSteps,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
} from '@chakra-ui/react'

const steps = [
  { title: 'step 1', description: 'contact Info' },
  { title: 'step 2 ', description: 'date and payment' },
  { title: 'step 3', description: 'complete' },
]

const CheckOutStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Stepper
      size="lg"
      colorScheme="yellow"
      display={'flex'}
      flexDirection={'row'}
      textAlign={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      index={activeStep}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

export default CheckOutStepper
