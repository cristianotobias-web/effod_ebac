import RestaurantPerfil from '../MenuRestaurant'
import { List, RestaurantListContainer } from './styles'

// Ajuste FoodItem para refletir as propriedades reais dos itens de comida
export interface FoodItem {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export interface Props {
  restaurant: FoodItem[]
}

const ProductListPerfil: React.FC<Props> = ({ restaurant }) => {
  return (
    <RestaurantListContainer>
      <div className="container">
        <List>
          {restaurant.map((cardapio) => {
            return (
              <>
                <RestaurantPerfil
                  key={cardapio.id}
                  id={cardapio.id}
                  nome={cardapio.nome}
                  descricao={cardapio.descricao}
                  foto={cardapio.foto}
                  porcao={cardapio.porcao}
                  preco={cardapio.preco}
                />
              </>
            )
          })}
        </List>
      </div>
    </RestaurantListContainer>
  )
}

export default ProductListPerfil
