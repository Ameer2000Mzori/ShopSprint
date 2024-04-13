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
  const handleLogin = () => {
    const result = LoginLogic(email, password)
    console.log('this is result return ', result)
  }

  return (
    <StyledFormWrap>
      <StyledForm onClick={(e) => e.preventDefault()}>
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
        <StyledButton
          type="submit"
          onClick={(e) => handleLogin(email, password)}
        >
          Submit
        </StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default LoginPage
