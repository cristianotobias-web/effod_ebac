import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definição do tipo para o estado de ordem
type OrderState = {
  isVisible: boolean // Indica se o componente de ordem está visível ou não
  orderId: string // ID da ordem atual
}

// Estado inicial da ordem
const initialState: OrderState = {
  isVisible: false, // Inicialmente invisível
  orderId: '' // ID vazio até que seja definido
}

// Criação do slice de ordem com as ações correspondentes
export const orderSlice = createSlice({
  name: 'orderId', // Nome do slice
  initialState, // Estado inicial definido acima
  reducers: {
    setOrderVisibility: (state, action: PayloadAction<boolean>) => {
      // Reducer para definir a visibilidade do componente de ordem
      state.isVisible = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      // Reducer para definir o ID da ordem
      state.orderId = action.payload
    }
  }
})

// Exporta as actions geradas automaticamente para o slice de ordem
export const { setOrderVisibility, setOrderId } = orderSlice.actions

// Exporta o reducer do slice de ordem para ser utilizado na configuração da store
export default orderSlice.reducer
