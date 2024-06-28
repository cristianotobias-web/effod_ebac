// Tipo para um restaurante
declare type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

// Interface para um item de comida (provavelmente um item do cardápio de um restaurante)
declare interface FoodItem {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

// Interface para um endereço
declare interface Address {
  description: string
  city: string
  state: string
  zipCode: string
  number: string
  complement?: string // Complemento do endereço é opcional
}

// Interface para o estado de entrega
declare interface DeliveryState {
  receiver: string
  address: Address
  isVisible: boolean
}

// Interface para o estado de pagamento
declare interface PaymentState {
  isVisible: boolean
}

// Tipo para a resposta de compra
declare type purchaseResponse = {
  orderId: string
}

// Interface para o payload de checkout
declare interface CheckoutPayload {
  products: Product[] // Array de produtos
  delivery: Delivery // Informações de entrega
  payment: Payment // Informações de pagamento
}

// Interface para o estado de pedido
declare interface OrderState {
  isVisible: boolean
  orderId: string
}
