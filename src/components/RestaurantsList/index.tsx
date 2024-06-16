import { Food } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List, RestaurantsListContainer } from './styles'

export type Props = {
  restaurants: Food[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsListContainer>
    <div className="container">
      <List>
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
      </List>
    </div>
  </RestaurantsListContainer>
)

export default RestaurantsList
