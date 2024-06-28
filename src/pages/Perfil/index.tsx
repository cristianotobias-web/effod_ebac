import { useParams } from 'react-router-dom' // Importa o hook useParams do React Router
import HeaderPerfil from '../../components/HeaderPerfil' // Importa o componente de cabeçalho do perfil
import BannerPerfil from '../../components/BannerPerfil' // Importa o componente de banner do perfil
import RestaurantPerfil from '../../components/RestaurantPerfil' // Importa o componente de restaurante do perfil
import { useGetRestaurantsQuery } from '../../services/api' // Importa a query para obter os restaurantes da API
import Loader from '../../Loaders' // Importa o componente de loader

/**
 * Componente de perfil de restaurante.
 * Exibe informações específicas de um restaurante com base no ID obtido dos parâmetros da URL.
 */
const Perfil = () => {
  const { id } = useParams() // Obtém o parâmetro 'id' da URL usando o hook useParams do React Router
  // Verifica se o 'id' está definido e o converte para número
  const restaurantId = id ? parseInt(id, 10) : null
  const { data: restaurants } = useGetRestaurantsQuery() // Busca os dados dos restaurantes da API usando a query

  if (!restaurants) {
    return (
      <div className="container">
        <Loader />{' '}
        {/* Renderiza o loader enquanto os dados estão sendo carregados */}
      </div>
    )
  }

  // Encontra o restaurante específico com base no 'restaurantId'
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  )

  if (!restaurant) {
    return <div>Restaurante não encontrado</div> // Caso não encontre o restaurante com o 'restaurantId'
  }

  return (
    <>
      <HeaderPerfil /> {/* Renderiza o cabeçalho do perfil */}
      <BannerPerfil restaurant={restaurant} />
      {/* Renderiza o banner do perfil com os dados do restaurante */}
      <RestaurantPerfil restaurant={restaurant.cardapio} />
      {/* Renderiza o perfil do restaurante com o cardápio específico */}
    </>
  )
}

export default Perfil
