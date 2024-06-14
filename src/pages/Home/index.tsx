import $ from 'jquery'
import ProductList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}
const Home = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const endpoint = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (res) => {
        setRestaurants(res)
      },
      error: (err) => {
        console.error('Erro ao buscar os dados:', err)
      }
    })
  }, [])

  return (
    <>
      <Header />
      {restaurants ? (
        <ProductList foods={restaurants} />
      ) : (
        <h3>Serviço nao disponivel</h3>
      )}
    </>
  )
}

export default Home
