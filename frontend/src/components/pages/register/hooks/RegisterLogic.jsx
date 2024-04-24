// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

// const useRegister = () => {
//   const { mutate, isPending, error, data } = useMutation({
//     mutationFn: ({ name, username, email, password }) => {
//       console.log(' info we got ', name, username, password, email)
//       return axios
//         .post('/register', { name, username, password, email })
//         .then((result) => result.data)
//         .catch((error) => {
//           console.log(' error we got ', error)
//           throw error
//         })
//     },
//   })

//   console.log('before returning', isPending, error, data)
//   return { mutate, isPending, isError: error, data }
// }

// export default useRegister
