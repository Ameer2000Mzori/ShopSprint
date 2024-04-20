import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useRegister = () => {
  const { mutate, ...result } = useMutation(({ name, password, email }) => {
    return axios.post('/register', {
      name,
      password,
      email,
    })
  })

  return { mutate, ...result }
}

export default useRegister
