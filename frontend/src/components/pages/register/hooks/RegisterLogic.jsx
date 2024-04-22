import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

const useRegister = (data) => {
  console.log('this is data', data)

  const { mutate, ...result } = useMutation((Input) => {
    console.log(' info we got ', Input)
    // axios.post('/register', { name, password, email })
  })

  return { mutate, ...result }
}

export default useRegister
