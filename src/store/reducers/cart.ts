import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo o tipo para o estado do carrinho
type CartState = {
  items: FoodItem[] // Lista de itens no carrinho
  isOpen: boolean // Indica se o carrinho está aberto ou fechado
}

// Estado inicial do carrinho
const initialState: CartState = {
  items: [], // Inicia sem itens no carrinho
  isOpen: false // Inicia com o carrinho fechado
}

// Criando o slice do carrinho com as ações
const cartSlice = createSlice({
  name: 'cart', // Nome do slice para identificação no Redux DevTools
  initialState, // Estado inicial definido anteriormente
  reducers: {
    add: (state, action: PayloadAction<FoodItem>) => {
      // Adiciona um item ao carrinho, verificando se ele já existe
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      // Remove um item do carrinho pelo ID
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      // Abre o carrinho
      state.isOpen = true
    },
    close: (state) => {
      // Fecha o carrinho
      state.isOpen = false
    },
    clear: (state) => {
      // Limpa todos os itens do carrinho
      state.items = []
    }
  }
})

// Exportando as ações e o reducer para utilização na aplicação
export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
