export const parseToBrl = (price: number) =>
  price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
