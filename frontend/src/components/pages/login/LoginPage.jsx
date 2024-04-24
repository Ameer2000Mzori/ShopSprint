import React, { useEffect, useState } from 'react'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from './component/StyledComponent.jsx'
import useStoreToken from '../../shared/useStoreToken.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthOperations from '../../shared/AuthOperations.jsx'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const saveData = useStoreToken()
  const { mutate, isPending, isError, data } = AuthOperations()
  const navigate = useNavigate()

  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  const handleLogin = (e) => {
    e.preventDefault()
    mutate([{ url: 'login', email: email, password: password }])
  }

  console.log('this is result ', isPending, isError, data)

  if (data && !isError) {
    saveData({ ...data.data, token: data.token })
  }

  return (
    <StyledFormWrap>
      <StyledForm onSubmit={handleLogin}>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="email">Email address</StyledLabelInput>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="password">Password</StyledLabelInput>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledLabelInputWrap>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default LoginPage
