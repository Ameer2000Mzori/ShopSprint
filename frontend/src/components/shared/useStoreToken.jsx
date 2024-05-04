import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { addRedirectRoute } from '../features/routeRedirect/routeRedirectSlice.js'

const useStoreToken = () => {
  const dispatch = useDispatch()
  const { path } = useSelector((state) => state.route)
  const navigate = useNavigate()
  const saveData = (data) => {
    dispatch(loginUser(data))

    if (data) {
      setTimeout(() => {
        if (path !== '/') {
          navigate(`${path}`)
          dispatch(addRedirectRoute('/'))
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
