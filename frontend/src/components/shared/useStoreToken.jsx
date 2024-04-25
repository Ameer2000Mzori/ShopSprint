import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { RedirectRoute } from './RedirectRoute'

const useStoreToken = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addNewRoute, returnRoute } = RedirectRoute()
  const route = returnRoute()
  const saveData = (data) => {
    console.log('data in token file: ', data)
    dispatch(loginUser(data))

    if (data) {
      setTimeout(() => {
        console.log('this is get route', route)

        if (route !== '/') {
          console.log('route', route)
          navigate(`/${route}`)
        } else {
          navigate('/')
        }
      }, 500)
    }
  }
  console.log('data saved')
  const userData = useSelector((state) => state.user)

  console.log('user data is ', userData)

  return saveData
}

export default useStoreToken
