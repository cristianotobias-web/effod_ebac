import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

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
  const { data: restaurants } = useGetRestaurantsQuery()
  return (
    <>
      <Header />
      {restaurants ? (
        <RestaurantsList restaurants={restaurants} />
      ) : (
        <h3>Serviço nao disponivel</h3>
      )}
    </>
  )
}

export default Home
