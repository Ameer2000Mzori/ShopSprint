import React, { useState } from 'react'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from '../login/component/StyledComponent'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <StyledFormWrap>
      <StyledForm>
        <StyledLabelInputWrap>
          <StyledLabelInput
            htmlFor="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </StyledLabelInput>
          <input type="text" id="name" />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email address
          </StyledLabelInput>
          <input type="text" id="email" />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </StyledLabelInput>
          <input type="password" id="password" />
        </StyledLabelInputWrap>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Register
