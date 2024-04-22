// LoginPage.jsx
import React, { useState } from 'react'
import LoginLogic from './component/LoginLogic.jsx'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from './component/StyledComponent.jsx'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isPending, isError, data } = LoginLogic()

  const handleLogin = (e) => {
    e.preventDefault()
    mutate(email, password)
  }

  console.log('this is result ', isPending, isError, data)

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
