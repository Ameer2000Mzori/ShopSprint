import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from './component/StyledComponent.jsx'
import useStoreToken from '../../shared/useStoreToken.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthOperations from '../../shared/AuthOperations.jsx'
import { validationSchemaLogin } from '../../shared/validationSchema.js'
// import { combineSlices } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const saveData = useStoreToken()
  const navigate = useNavigate()
  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      console.log('newData', newData)
      saveData({ ...newData?.data, token: newData?.token })
      toast.success(`${newData.message || 'Login Success'}`)
    },
    onError: (error) => {
      console.log('error', error)
      toast.error(`${error?.response?.data?.message || 'Login failed'}`)
    },
  })

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
          url: '/login',
          email: values.email,
          password: values.password,
        },
      ])
    },
    validationSchema: validationSchemaLogin,
  })

  console.log('this is isError', isError)

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

        {isError && (
          <p className="text-red-500">
            Error: {isError?.response?.data?.message || 'Login failed'}
          </p>
        )}

        <StyledButton type="submit">
          {isPending ? 'loading...' : 'Submit'}
        </StyledButton>
      </StyledForm>
      <p>
        no account ? <Link to="/register">please make one</Link>
      </p>
    </StyledFormWrap>
  )
}

export default LoginPage
