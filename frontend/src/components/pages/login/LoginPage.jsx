import React from 'react'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from './component/StyledComponent.jsx'

const LoginPage = () => {
  return (
    <StyledFormWrap>
      <StyledForm>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </StyledLabelInput>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </StyledLabelInput>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </StyledLabelInputWrap>
        <StyledButton type="submit" className="btn btn-primary">
          Submit
        </StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default LoginPage
