import axios from 'axios'
// import { useDispatch } from 'react-redux'

const LoginLogic = async (email, password) => {
  // const dispatch = useDispatch()
  try {
    const response = await axios.post('/login', { email, password })

    return response.data
  } catch (error) {
    console.error('Login failed:', error)
    return { success: false, message: 'Login failed' }
  }
}

export default LoginLogic
