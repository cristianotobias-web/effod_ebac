import { Food } from '../../pages/Home'
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
            id={food.id}
            titulo={food.titulo}
            avaliacao={food.avaliacao}
            descricao={food.descricao}
            image={food.capa}
            destacado={food.destacado}
            tipo={food.tipo}
          />
        ))}
      </List>
    </div>
  </ProductsListContainer>
)

export default ProductList
