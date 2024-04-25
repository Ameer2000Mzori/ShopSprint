import * as Yup from 'yup'

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string().required('name is required'),
  userName: Yup.string().required(' userName is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

// export const validationSchemaLogin = Yup.object().shape({
//   email: Yup.string().required('Email is required'),
//   password: Yup.string().required('Password is required'),
// })
