import React, { useState } from 'react'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from '../login/component/StyledComponent'
import RegisterLogic from './hooks/RegisterLogic'

const Register = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isPending, isError, data } = RegisterLogic()

  const handleSubmit = () => {
    console.log('this data got', name, email, password)
    mutate({ name, username: userName, email, password })
  }

  if (isPending) return <div>isPending...</div>

  console.log('after everything', isPending, isError, data)

  return (
    <StyledFormWrap>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(name, email, password)
        }}
      >
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="name">Name</StyledLabelInput>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="username">User Name</StyledLabelInput>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </StyledLabelInputWrap>
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
        {isError?.response?.data?.message && (
          <div className="text-white">{isError?.response?.data?.message}</div>
        )}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Register
