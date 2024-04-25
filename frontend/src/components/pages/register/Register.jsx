import React, { useState } from 'react'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from '../login/component/StyledComponent'
import AuthOperations from '../../shared/AuthOperations'
import useStoreToken from '../../shared/useStoreToken'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const saveData = useStoreToken()
  const navigate = useNavigate()
  const { mutate, isPending, isSuccess, isError, data } = AuthOperations()
  const handleSubmit = () => {
    console.log('this data got', name, email, password)
    mutate([
      {
        method: 'POST',
        url: 'register',
        name: name,
        username: userName,
        email: email,
        password: password,
      },
    ])
  }

  if (isPending) return <div>isPending...</div>

  if (isError) console.log('there is a error ')

  if (isSuccess) {
    saveData({ ...data.data, token: data.token })
  }

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
        {data?.message && <div className="text-white">{data?.message}</div>}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Register
