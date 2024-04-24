import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = () => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ({ method, data }) => {
      console.log(' info we got ', method, data)
      return axios
        .post(`/${method}`, { data })
        .then((result) => result.data)
        .catch((error) => {
          console.log(' error we got ', error)
          throw error
        })
    },
  })

  return { mutate, isPending, isError, data }
}

export default AuthOperations
