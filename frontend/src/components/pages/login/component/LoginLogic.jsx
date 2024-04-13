import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const LoginLogic = (value) => {
  console.log('this is value, ', value)
  const result = useQuery({
    queryKey: ['login', value],
    queryFn: () => axios.post('/login', value).then((res) => res.data),
  })

  console.log('result: ', result)
}

export default LoginLogic
