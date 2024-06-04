import React, { useEffect } from 'react'
import AuthOperations from '../../shared/AuthOperations'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoadingPage from '../../shared/LoadingPage'

export default function VerifyPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  console.log('this is id ', id)
  const { mutate, isPending, isError, data } = AuthOperations({
    onSuccess: () => {},
    onError: (error) => {
      console.log('something went wrong')
      console.log('error', error)
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

  if (isPending) return <LoadingPage />

  if (isError) return <div> there is an error....</div>

  return (
    <div className="h-[100vh] flex flex-col text-center items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Account Verified</h1>
        <p className="text-gray-700 mb-4">
          Congratulations! Your account has been successfully verified.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}
