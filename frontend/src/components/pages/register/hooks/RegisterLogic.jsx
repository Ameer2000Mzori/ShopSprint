import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useRegister = () => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ({ name, username, email, password }) => {
      console.log(' info we got ', name, username, password, email)
      axios
        .post('/register', { name, username, password, email })
        .then((result) => result.data)
        .catch((error) => console.error(error))
    },
  })

  console.log('before returning', isPending, isError, data)
  return { mutate, isPending, isError, data }
}

export default useRegister
