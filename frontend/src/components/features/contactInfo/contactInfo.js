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
  name: 'check-out-steps',
  initialState,
  reducers: {
    updateStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { updateStep } = contactInfo.actions

export default contactInfo.reducer
