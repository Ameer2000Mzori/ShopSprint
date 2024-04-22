import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useRegister = () => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ({ name, username, email, password }) => {
      console.log(' info we got ', name, password, email)
      axios
        .post('/register', { name, username, password, email })
        .then((result) => result.data)
        .catch((error) => console.error(error))
    },
  })

  return { mutate, isPending, isError, data }
}

export default useRegister
