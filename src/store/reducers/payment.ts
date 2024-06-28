import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: PaymentState = {
  isVisible: false
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    }
  }
})

export const { setPaymentVisibility } = paymentSlice.actions

export default paymentSlice.reducer
