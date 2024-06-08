import Food from '../../models/Foods'
import Product from '../Product'
import { List, ProductsListContainer } from './styles'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <ProductsListContainer>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            title={food.title}
            grade={food.grade}
            description={food.description}
            image={food.image}
            infos={food.infos}
          />
        ))}
      </List>
    </div>
  </ProductsListContainer>
)

export default ProductList
