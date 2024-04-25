import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) navigate('/')
  }, [token])

  return <div>ProfilePage</div>
}

export default ProfilePage
