import React, { useEffect } from 'react'
import { useFormik } from 'formik'
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
import { useSelector } from 'react-redux'
import { validationSchemaRegister } from '../../shared/validationSchema'

const Register = () => {
  const saveData = useStoreToken()
  const navigate = useNavigate()

  const token = useSelector((state) => state.user.token)
  const { mutate, isPending, isSuccess, isError, data } = AuthOperations()

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  const formik = useFormik({
    initialValues: {
      name: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log('values onsubmit register', values)

      mutate([
        {
          method: 'POST',
          url: 'register',
          name: values.name,
          username: values.userName,
          email: values.email,
          password: values.password,
        },
      ])
    },
    validationSchema: validationSchemaRegister,
  })

  if (isPending) return <div>isPending...</div>

  if (isSuccess) {
    saveData({ ...data.data, token: data.token })
  }

  console.log('after everything', isPending, isError, data)

  return (
    <StyledFormWrap>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="name">Name</StyledLabelInput>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-white">{formik.errors.name}</p>
          ) : null}
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="userName">User Name</StyledLabelInput>
          <input
            type="text"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="text-white">{formik.errors.userName}</p>
          )}
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="email">Email address</StyledLabelInput>
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-white">{formik.errors.email}</p>
          ) : null}
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="password">Password</StyledLabelInput>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-white">{formik.errors.password}</p>
          ) : null}
        </StyledLabelInputWrap>
        <StyledLabelInputWrap>
          <StyledLabelInput htmlFor="confirmPassword">
            Confirm Password
          </StyledLabelInput>
          <input
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-white">{formik.errors.confirmPassword}</p>
          )}
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
