import { useParams } from 'react-router-dom'
import $ from 'jquery'
import { Food } from '../../pages/Home'
import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductListPerfil from '../../components/ProductsListPerfil'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()
  // Verifica se o id está definido e o converte para número
  const restaurantId = id ? parseInt(id, 10) : null
  const [restaurants, setRestaurants] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const endpoint = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (res) => {
        setRestaurants(res)
        setLoading(false)
      },
      error: (err) => {
        console.error('Erro ao buscar os dados:', err)
        setLoading(false)
      }
    })
  }, [])

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  if (loading) {
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
      <HeaderPerfil cartCount={cartCount} />
      <BannerPerfil restaurant={restaurant} />
      <ProductListPerfil foods={restaurant.cardapio} addToCart={addToCart} />
    </>
  )
}

export default Perfil
