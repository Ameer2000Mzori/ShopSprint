import React, { useEffect, useState } from 'react'
import AuthOperations from '../../shared/AuthOperations'
import { useParams } from 'react-router-dom'

export default function VerifyPage() {
  const { userverified, setUserverified } = useState(true)

  const { id } = useParams()
  //   const { data, isError, isLoading } = useQuery({
  // queryKey: ['product', id],
  // queryFn: () => axios.get(`/${id}`).then((res) => res.data),
  //   })

  //   const { mutate, isPending, isError, data } = AuthOperations({
  //     onSuccess: () => {
  //       setUserverified(true)
  //       setTimeout(() => {
  //         navigate('/')
  //       }, 2000)
  //     },
  //     onError: (error) => {
  //       console.log('something went wrong')
  //       console.log('error', error)
  //       setUserverified(false)
  //     },
  //   })

  //   useEffect(() => {
  //     // mutate([{ method: 'GET', url: `/user/verify`, token: localStorage.getItem('token') }])
  //   })

  //   if (isPending) return <div>loading...</div>

  //   if (isError) return <div>There is an error...</div>

  //   if (userverified)
  return (
    <div className="h-[100vh] flex flex-col text-center items-center justify-center">
      User Verified id : {id}
    </div>
  )
  //   return <div>VerifyPage</div>
}
