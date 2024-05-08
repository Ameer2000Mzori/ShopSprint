import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import {
  StyledButton,
  StyledForm,
  StyledFormWrap,
  StyledLabelInput,
  StyledLabelInputWrap,
} from '../login/component/StyledComponent'
import {
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
  Modal,
  ModalFooter,
} from '@chakra-ui/react'

import AuthOperations from '../../shared/AuthOperations'
import useStoreToken from '../../shared/useStoreToken'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { validationSchemaRegister } from '../../shared/validationSchema'
import NotificationCard from '../../shared/NotificationCard'

const Register = ({
  registerIsOpen: isOpen,
  registerOnOpen: onOpen,
  registerOnClose: onClose,
}) => {
  const saveData = useStoreToken()
  const navigate = useNavigate()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const token = useSelector((state) => state.user.token)
  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      saveData({ ...newData?.data, token: newData?.token })
      NotificationCard({
        option: 'success',
        message: `${
          newData?.response?.data?.message || 'account created successfully'
        }`,
      })
    },
    onError: (error) => {
      NotificationCard({
        option: 'error',
        message: `${error?.response?.data?.message || 'there was an error'}`,
      })
    },
  })

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

  console.log('this is result ', isPending, isError)

  return (
    // <StyledFormWrap>
    //   <StyledForm onSubmit={formik.handleSubmit}>
    //     <StyledLabelInputWrap>
    //       <StyledLabelInput htmlFor="name">Name</StyledLabelInput>
    //       <input
    //         type="text"
    //         id="name"
    //         onChange={formik.handleChange}
    //         value={formik.values.name}
    //         onBlur={formik.handleBlur}
    //       />
    //       {formik.touched.name && formik.errors.name ? (
    //         <p className="text-white">{formik.errors.name}</p>
    //       ) : null}
    //     </StyledLabelInputWrap>
    //     <StyledLabelInputWrap>
    //       <StyledLabelInput htmlFor="userName">User Name</StyledLabelInput>
    //       <input
    //         type="text"
    //         id="userName"
    //         onChange={formik.handleChange}
    //         value={formik.values.userName}
    //         onBlur={formik.handleBlur}
    //       />
    //       {formik.touched.userName && formik.errors.userName && (
    //         <p className="text-white">{formik.errors.userName}</p>
    //       )}
    //     </StyledLabelInputWrap>
    //     <StyledLabelInputWrap>
    //       <StyledLabelInput htmlFor="email">Email address</StyledLabelInput>
    //       <input
    //         type="text"
    //         id="email"
    //         onChange={formik.handleChange}
    //         value={formik.values.email}
    //         onBlur={formik.handleBlur}
    //       />
    //       {formik.touched.email && formik.errors.email ? (
    //         <p className="text-white">{formik.errors.email}</p>
    //       ) : null}
    //     </StyledLabelInputWrap>
    //     <StyledLabelInputWrap>
    //       <StyledLabelInput htmlFor="password">Password</StyledLabelInput>
    //       <input
    //         type="password"
    //         id="password"
    //         onChange={formik.handleChange}
    //         value={formik.values.password}
    //         onBlur={formik.handleBlur}
    //       />
    //       {formik.touched.password && formik.errors.password ? (
    //         <p className="text-white">{formik.errors.password}</p>
    //       ) : null}
    //     </StyledLabelInputWrap>
    //     <StyledLabelInputWrap>
    //       <StyledLabelInput htmlFor="confirmPassword">
    //         Confirm Password
    //       </StyledLabelInput>
    //       <input
    //         type="password"
    //         id="confirmPassword"
    //         onChange={formik.handleChange}
    //         value={formik.values.confirmPassword}
    //         onBlur={formik.handleBlur}
    //       />
    //       {formik.touched.confirmPassword && formik.errors.confirmPassword && (
    //         <p className="text-white">{formik.errors.confirmPassword}</p>
    //       )}
    //     </StyledLabelInputWrap>
    //     {isError && (
    //       <p className="text-red-500">
    //         Error: {isError?.response?.data?.message || 'Login failed'}
    //       </p>
    //     )}
    //     <StyledButton type="submit">
    //       {isPending ? 'Loading' : 'Submit'}
    //     </StyledButton>
    //   </StyledForm>
    //   <p>
    //     have account ? <Link to="/login">please login</Link>
    //   </p>
    // </StyledFormWrap>

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent as="form" onSubmit={formik.handleSubmit}>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel htmlFor="name">name</FormLabel>
            <Input
              ref={initialRef}
              placeholder="name"
              type="text"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="userName">userName</FormLabel>
            <Input
              placeholder="userName"
              type="text"
              id="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="email">email</FormLabel>
            <Input
              placeholder="email"
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="password">password</FormLabel>
            <Input
              placeholder="password"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="confirmPassword">confirmPassword</FormLabel>
            <Input
              placeholder="confirmPassword"
              type="password"
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
            />
          </FormControl>
        </ModalBody>
        {isError && (
          <p className="text-red-500 text-center">
            Error: {isError?.response?.data?.message || 'Login failed'}
          </p>
        )}
        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            {isPending ? 'loading...' : 'Submit'}
          </Button>

          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Register
