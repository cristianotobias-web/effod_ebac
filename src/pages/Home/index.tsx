import { useGetRestaurantsQuery } from '../../services/api' // Importa a query para obter os restaurantes da API
import RestaurantsList from '../../components/RestaurantsList' // Importa o componente de lista de restaurantes
import Header from '../../components/Header' // Importa o componente de cabeçalho
import Loader from '../../Loaders' // Importa o componente de loader

/**
 * Página inicial da aplicação.
 * Exibe um cabeçalho, a lista de restaurantes carregada da API, ou um loader enquanto os dados estão sendo buscados.
 */
const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery() // Busca os dados dos restaurantes da API

  return (
    <>
      <Header /> {/* Renderiza o cabeçalho */}
      {restaurants ? ( // Condicional: se houver dados dos restaurantes
        <RestaurantsList restaurants={restaurants} /> // Renderiza a lista de restaurantes com os dados obtidos
      ) : (
        // Senão
        <div className="container">
          <Loader />
          {/* Renderiza o loader enquanto os dados estão sendo carregados */}
        </div>
      )}
    </>
  )
}

export default Home
