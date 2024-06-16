import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import RestaurantPerfil from '../../components/RestaurantPerfil'
import { useGetRestaurantsQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  // Verifica se o id está definido e o converte para número
  const restaurantId = id ? parseInt(id, 10) : null
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <div>Loading...</div>
  }

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  )

  if (!restaurant) {
    return <div>Restaurante não encontrado</div>
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil restaurant={restaurant} />
      <RestaurantPerfil restaurant={restaurant.cardapio} />
    </>
  )
}

export default Perfil
