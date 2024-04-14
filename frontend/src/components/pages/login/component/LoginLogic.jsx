import axios from 'axios'

const LoginLogic = async (email, password) => {
  try {
    const response = await axios.post('/login', { email, password })
    return response.data
  } catch (error) {
    console.error('Login failed:', error)
    return { success: false, message: 'Login failed' }
  }
}

export default LoginLogic
