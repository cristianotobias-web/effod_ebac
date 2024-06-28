import Restaurant from '../Restaurant' // Importa o componente de restaurante

import * as S from './styles' // Estilos estilizados do componente

export type Props = {
  restaurants: Food[] // Interface para os dados dos restaurantes
}

/**
 * Componente para exibir uma lista de restaurantes.
 */
const RestaurantsList = ({ restaurants }: Props) => (
  <S.RestaurantsListContainer>
    <div className="container">
      <S.List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            id={restaurant.id}
            titulo={restaurant.titulo}
            avaliacao={restaurant.avaliacao}
            descricao={restaurant.descricao}
            image={restaurant.capa}
            destacado={restaurant.destacado}
            tipo={restaurant.tipo}
          />
        ))}
      </S.List>
    </div>
  </S.RestaurantsListContainer>
)

export default RestaurantsList
