import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import api from '../services/api'
import deliveryReducer from './reducers/delivery'
import cartReducer from './reducers/cart'
import paymentReducer from './reducers/payment'
import orderReducer from './reducers/order'

// Define o tipo do estado raiz da aplicação
export type RootReducer = ReturnType<typeof store.getState>

// Define o tipo do dispatch das ações do Redux
export type AppDispatch = typeof store.dispatch

// Exporta o hook personalizado para utilizar o useSelector com o RootState
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    orderId: orderReducer,
    [api.reducerPath]: api.reducer // Adiciona o reducer da API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Adiciona o middleware da API
})
