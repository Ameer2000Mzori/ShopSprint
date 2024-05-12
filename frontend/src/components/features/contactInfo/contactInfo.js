import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  paymentMethod: '',
}

const contactInfo = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    updateContactInfo: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { updateStep } = contactInfo.actions

export default contactInfo.reducer
