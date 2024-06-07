import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'

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
  const [disableBtn, setDisableBtn] = useState(false)

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const token = tokenResponse.access_token
  //       const response = await fetch(
  //         `https://oauth2.googleapis.com/tokeninfo?access_token=${token}`
  //       )
  //       const data = await response.json()

  //       if (data.email) {
  //         formik.setFieldValue('email', data.email)
  //         setDisableBtn(true)
  //       } else {
  //         console.error('Email not found in user data')
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error)
  //     }
  //   },
  // })

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const token = tokenResponse.access_token

        // Fetch basic token information to verify token and get user info
        const tokenInfoResponse = await fetch(
          `https://oauth2.googleapis.com/tokeninfo?access_token=${token}`
        )
        const tokenInfoData = await tokenInfoResponse.json()

        if (tokenInfoData.email) {
          formik.setFieldValue('email', tokenInfoData.email)
          setDisableBtn(true)
        } else {
          console.error('Email not found in user data')
        }

        // Fetch detailed user info from Google People API
        const userInfoResponse = await fetch(
          'https://people.googleapis.com/v1/people/me?personFields=names,photos',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const userInfoData = await userInfoResponse.json()

        console.log(
          'this is user information data after token and now we are able to take hi image and more',
          userInfoData
        )

        const name =
          userInfoData.names && userInfoData.names[0]
            ? userInfoData.names[0].displayName
            : 'Unknown'
        // const photoUrl = userInfoData.photos && userInfoData.photos[0] ? userInfoData.photos[0].url : 'No Photo'

        console.log('User Name:', name)
        // console.log('User Photo URL:', photoUrl)

        // Set additional fields if needed
        formik.setFieldValue('name', name)
        formik.setFieldValue('userName', name)
        // formik.setFieldValue('photoUrl', photoUrl)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
  })

  const token = useSelector((state) => state.user.token)
  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      console.log('new user data creations', newData)
      saveData({ ...newData?.User, token: newData?.token })
      NotificationCard({
        option: 'success',
        message: `${
          newData?.response?.data?.message || 'account created successfully'
        }`,
      })
      navigate('/')
      setDisableBtn(false)
    },
    onError: (error) => {
      NotificationCard({
        option: 'error',
        message: `${error?.response?.data?.message || 'there was an error'}`,
      })
    },
  })

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
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent as="form" onSubmit={formik.handleSubmit}>
        <ModalHeader>create account</ModalHeader>
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
            {formik.touched.name && formik.errors.name ? (
              <Text>{formik.errors.name}</Text>
            ) : null}
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
            {formik.touched.userName && formik.errors.userName ? (
              <Text>{formik.errors.userName}</Text>
            ) : null}
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
            {formik.touched.email && formik.errors.email ? (
              <Text>{formik.errors.email}</Text>
            ) : null}
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
            {formik.touched.password && formik.errors.password ? (
              <Text>{formik.errors.password}</Text>
            ) : null}
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
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <Text>{formik.errors.confirmPassword}</Text>
            ) : null}
          </FormControl>
        </ModalBody>
        {isError && (
          <p className="text-red-500 text-center">
            Error: {isError?.response?.data?.message || 'Login failed'}
          </p>
        )}
        <ModalFooter>
          <button
            style={{ display: disableBtn ? 'none' : '' }}
            onClick={() => {
              login()
            }}
            class="px-4 py-2 mr-[10px] border flex gap-2 border-slate-200  rounded-lg text-slate-700  hover:border-slate-400  hover:text-slate-900  hover:shadow transition duration-150"
          >
            <img
              class="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>

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
