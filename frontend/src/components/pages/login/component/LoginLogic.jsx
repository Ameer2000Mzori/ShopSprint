// import axios from 'axios'
// import { useMutation } from '@tanstack/react-query'

// const LoginLogic = () => {
//   const { mutate, isPending, isError, data } = useMutation({
//     mutationFn: ({ email, password }) => {
//       console.log(' info we got ', email, password)
//       return axios
//         .post('/login', { email, password })
//         .then((result) => result.data)
//         .catch((error) => {
//           console.log(' error we got ', error)
//           throw error
//         })
//     },
//   })

//   return { mutate, isPending, isError, data }
// }

// export default LoginLogic
