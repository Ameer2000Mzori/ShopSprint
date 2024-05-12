import { useMutation } from '@tanstack/react-query'
import { logOutUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const AuthCheck = ({ onSuccess, onError }) => {
  const dispatch = useDispatch()

  const { mutate, isError } = useMutation({
    mutationFn: ([{ token, id }]) => {
      return axios
        .request({
          method: `POST`,
          url: `/usercheck`,

          data: {
            id,
          },

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
    onSuccess:
      onSuccess ??
      (() => {
        console.log('there is success user will stay logged in')
      }),

    onError:
      onError ??
      (() => {
        console.log('there is an error user will be logged out ')
        dispatch(logOutUser())
      }),
  })

  console.log('is error', isError)
  return { mutate }
}

export default AuthCheck
