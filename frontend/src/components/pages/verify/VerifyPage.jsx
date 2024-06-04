import React, { useEffect, useState } from 'react'
import AuthOperations from '../../shared/AuthOperations'
import { useNavigate, useParams } from 'react-router-dom'

export default function VerifyPage() {
  const { userverified, setUserverified } = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()

  console.log('this is id ', id)
  const { mutate, isPending, data } = AuthOperations({
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
    mutate([
      {
        method: 'POST',
        url: `/verifyAccount`,
        verifyToken: id,
      },
    ])
  }, [])

  if (isPending) return <div>loading...</div>

  if (!userverified) return <div>There is an error...</div>

  if (userverified)
    return (
      <div className="h-[100vh] flex flex-col text-center items-center justify-center">
        User Verified id : {id}
      </div>
    )
}
