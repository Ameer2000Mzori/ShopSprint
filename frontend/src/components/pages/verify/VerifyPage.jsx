import React, { useEffect, useState } from 'react'
import AuthOperations from '../../shared/AuthOperations'

export default function VerifyPage() {
  const { userverified, setUserverified } = useState()

  const { mutate, isPending, isError, data } = AuthOperations({
    onSuccess: () => {
      setUserverified(true)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    },
    onError: (error) => {
      console.log('something went wrong')
      console.log('error', error)
      setUserverified(false)
    },
  })

  useEffect(() => {
    // mutate([{ method: 'GET', url: `/user/verify`, token: localStorage.getItem('token') }])
  })

  if (isPending) return <div>loading...</div>

  if (isError) return <div>There is an error...</div>

  if (userverified) return <div>User Verified</div>
  //   return <div>VerifyPage</div>
}
