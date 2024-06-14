import ProductPerfil from '../ProductPerfil'
import { List, ProductsListContainer } from './styles'

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
  foods: FoodItem[]
  addToCart: () => void
}

const ProductListPerfil: React.FC<Props> = ({ foods, addToCart }) => {
  return (
    <ProductsListContainer>
      <div className="container">
        <List>
          {foods.map((food) => {
            return (
              <>
                <ProductPerfil
                  key={food.id}
                  titulo={food.nome}
                  descricao={food.descricao}
                  image={food.foto}
                  porcao={food.porcao}
                  preco={food.preco}
                  addToCart={addToCart}
                />
              </>
            )
          })}
        </List>
      </div>
    </ProductsListContainer>
  )
}

export default ProductListPerfil
