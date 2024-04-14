import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../../features/user/userSlice'

const LoginLogic = async (email, password) => {
  const dispatch = useDispatch()
  try {
    const response = await axios.post('/login', { email, password })

    if (response.status >= 200 && response.status < 300) {
      dispatch(updateUser(response.data))
      return response.data
    } else {
      console.error('Login failed:', response.statusText)
      return { success: false, message: 'Login failed' }
    }
  } catch (error) {
    console.error('Login failed:', error)
    return { success: false, message: 'Login failed' }
  }
}

export default LoginLogic
