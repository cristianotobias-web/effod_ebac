import Food from '../../models/Foods'
import ProductPerfil from '../ProductPerfil'
import { List, ProductsListContainer } from './styles'

export type Props = {
  foods: Food[]
}

const ProductListPerfil = ({ foods }: Props) => (
  <ProductsListContainer>
    <div className="container">
      <List>
        {foods.map((food) => (
          <ProductPerfil
            key={food.id}
            title={food.title}
            description={food.description}
            image={food.image}
          />
        ))}
      </List>
    </div>
  </ProductsListContainer>
)

export default ProductListPerfil
