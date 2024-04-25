import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
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
import { validationSchemaLogin } from '../../shared/validationSchema.js'

const LoginPage = () => {
  const saveData = useStoreToken()
  const navigate = useNavigate()
  const { mutate, isPending, isSuccess, isError, data } = AuthOperations()
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('values onsubmit login', values)

      mutate([
        {
          method: 'POST',
          url: 'login',
          email: values.email,
          password: values.password,
        },
      ])
    },
    validationSchema: validationSchemaLogin,
  })

  console.log('this is result ', isPending, isSuccess, isError, data)

  if (isSuccess && data.code !== 'ERR_BAD_REQUEST') {
    saveData({ ...data?.data, token: data?.token })
  }

  return (
    <StyledFormWrap>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="email">Email address</StyledLabelInput>
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="password">Password</StyledLabelInput>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            onBlur={formik.handleBlur}
          />
        </StyledLabelInputWrap>
        {data?.message && (
          <div className="text-white">{data?.response?.data?.message}</div>
        )}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default LoginPage
