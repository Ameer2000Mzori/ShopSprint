import { useMutation } from '@tanstack/react-query'
import { logOutUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const AuthCheck = () => {
  const dispatch = useDispatch()

  const { mutate } = useMutation({
    mutationFn: ([{ token }]) => {
      return axios
        .request({
          method: `POST`,
          url: `/usercheck`,

          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => result.data)
        .catch((error) => {
          console.log(' error we got ', error)
          throw error
        })
    },
    onSuccess: () => {
      console.log('there is success user will stay logged in')
    },

    onError: () => {
      console.log('there is an error user will be logged out ')
      dispatch(logOutUser())
    },
  })

  return { mutate }
}

export default AuthCheck
