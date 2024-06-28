import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

const initialState: DeliveryState = {
  receiver: '',
  address: {
    description: '',
    city: '',
    state: '',
    zipCode: '',
    number: '',
    complement: ''
  },
  isVisible: false
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setReceiver: (state, action: PayloadAction<string>) => {
      // Define o nome do destinatário
      state.receiver = action.payload
    },
    setAddress: (state, action: PayloadAction<Address>) => {
      // Define o endereço completo
      state.address = action.payload
    },
    setVisibility: (state, action: PayloadAction<boolean>) => {
      // Define a visibilidade do componente de entrega
      state.isVisible = action.payload
    },
    setDeliveryData: (state, action: PayloadAction<Partial<DeliveryState>>) => {
      // Define os dados completos de entrega
      Object.assign(state, action.payload)
    },
    clearDeliveryData: (state) => {
      // Limpa todos os dados de entrega
      state.receiver = ''
      state.address = {
        description: '',
        city: '',
        state: '',
        zipCode: '',
        number: '',
        complement: ''
      }
    }
  }
})

export const {
  setReceiver,
  setAddress,
  setVisibility,
  setDeliveryData,
  clearDeliveryData
} = deliverySlice.actions

// Função assíncrona para buscar dados do CEP
export const fetchCEPData = (cep: string) => async (dispatch: Dispatch) => {
  try {
    // Realiza a requisição para o serviço de CEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const data = await response.json()

    // Verifica se o CEP é válido e foi encontrado
    if (!data.erro) {
      const address: Address = {
        description: data.logradouro,
        city: data.localidade,
        state: data.uf,
        zipCode: cep,
        number: '',
        complement: ''
      }
      dispatch(setAddress(address)) // Define o endereço no estado global
      return address // Retorna o endereço encontrado
    } else {
      console.error('CEP não encontrado')
      return null // Retorna null se o CEP não foi encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error)
    return null // Retorna null em caso de erro na requisição
  }
}

export default deliverySlice.reducer
