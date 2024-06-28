import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define o seu api com o endpoint existente
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood' // URL base da API
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Food[], void>({
      query: () => 'restaurantes' // Endpoint para obter a lista de restaurantes
    }),
    purchase: builder.mutation<purchaseResponse, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout', // Endpoint para realizar o checkout (POST)
        method: 'POST',
        body
      })
    })
  })
})

// Exporta os hooks gerados automaticamente para os endpoints
export const { useGetRestaurantsQuery, usePurchaseMutation } = api

export default api
