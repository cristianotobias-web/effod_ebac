import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FoodItem } from '../../components/RestaurantPerfil'

// Definindo o tipo para o estado do carrinho
type CartState = {
  items: FoodItem[]
  isOpen: boolean
}

// Estado inicial do carrinho
const initialState: CartState = {
  items: [],
  isOpen: false
}

// Criando o slice do carrinho com as ações
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FoodItem>) => {
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

// Exportando as ações e o reducer
export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
