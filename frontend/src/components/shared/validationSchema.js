import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  searchTerm: Yup.string(),
})

export default validationSchema
