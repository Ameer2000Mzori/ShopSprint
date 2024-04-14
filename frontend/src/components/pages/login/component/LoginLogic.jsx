import axios from 'axios'
import { useDispatch } from 'react-redux'

const LoginLogic = async (email, password) => {
  const dispatch = useDispatch()
  try {
    const response = await axios.post('/login', { email, password })

    if (response.status >= 200 && response.status < 300) {
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
