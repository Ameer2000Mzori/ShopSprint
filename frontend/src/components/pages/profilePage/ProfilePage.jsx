import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FetchOperations from '../../shared/FetchOperations'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const { mutate, isLoading, isError, data } = FetchOperations()

  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user.token) navigate('/')

    if (user.token) {
      mutate([
        { method: 'GET', url: 'user', id: `${user.id}`, token: user.token },
      ])
    }
  }, [user.token])

  if (isLoading) return <div>is loading....</div>

  if (isError) return <div>There is an error...</div>

  return (
    <div>
      <h1>ProfilePage</h1>
    </div>
  )
}

export default ProfilePage
