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

// import { GoogleLogin } from '@react-oauth/google'
import { useGoogleLogin } from '@react-oauth/google'

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

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('this is login', tokenResponse)
      const token = tokenResponse.access_token

      console.log('this is token', token)

      const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?access_token=${token}`
      )

      const data = await response.json() // Parse the JSON response

      console.log('this is user data after token', data)
    },
  })

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
          <button onClick={login}>Sign in with Google 🚀</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LoginPage
