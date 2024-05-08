import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import useStoreToken from '../../shared/useStoreToken.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthOperations from '../../shared/AuthOperations.jsx'
import { validationSchemaLogin } from '../../shared/validationSchema.js'
import NotificationCard from '../../shared/NotificationCard.jsx'
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
  Text,
} from '@chakra-ui/react'

const LoginPage = ({ loginIsOpen, loginOnClose }) => {
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const saveData = useStoreToken()
  const navigate = useNavigate()

  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      console.log('newData', newData)
      saveData({ ...newData?.data, token: newData?.token })
      NotificationCard({
        option: 'success',
        message: `login successfully`,
      })
      loginOnClose()
    },
    onError: (error) => {
      NotificationCard({
        option: 'error',
        message: `${error?.response?.data?.message || 'Login failed'}`,
      })
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
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={loginIsOpen}
      onClose={loginOnClose}
    >
      <ModalOverlay />
      <ModalContent as="form" onSubmit={formik.handleSubmit}>
        <ModalHeader>login</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel htmlFor="email">email</FormLabel>
            <Input
              ref={initialRef}
              placeholder="email"
              type="text"
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
            {isError && (
              <p className="text-red-500 text-center">
                Error: {isError?.response?.data?.message || 'Login failed'}
              </p>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            {isPending ? 'loading...' : 'Submit'}
          </Button>

          <Button onClick={loginOnClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LoginPage

// <StyledFormWrap>
//   <StyledForm onSubmit={formik.handleSubmit}>
//     <StyledLabelInputWrap>
//       <StyledLabelInput htmlFor="email">Email address</StyledLabelInput>
//       <input
//         type="text"
//         id="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//         onBlur={formik.handleBlur}
//       />
//     </StyledLabelInputWrap>
//     <StyledLabelInputWrap>
//       <StyledLabelInput htmlFor="password">Password</StyledLabelInput>
//       <input
//         type="password"
//         id="password"
//         onChange={formik.handleChange}
//         value={formik.values.Password}
//         onBlur={formik.handleBlur}
//       />
//     </StyledLabelInputWrap>

//     {isError && (
//       <p className="text-red-500">
//         Error: {isError?.response?.data?.message || 'Login failed'}
//       </p>
//     )}

//     <StyledButton type="submit">
//       {isPending ? 'loading...' : 'Submit'}
//     </StyledButton>
//   </StyledForm>
//   <p>
//     no account ? <Link to="/register">please make one</Link>
//   </p>
// </StyledFormWrap>
