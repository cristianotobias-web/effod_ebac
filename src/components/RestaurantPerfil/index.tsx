import RestaurantPerfil from '../MenuRestaurant' // Importa o componente de restaurante perfilado

import * as S from './styles' // Estilos estilizados do componente

export interface Props {
  restaurant: FoodItem[] // Interface para os itens de cardápio do restaurante
}

/**
 * Componente para exibir uma lista de restaurantes perfilados.
 */
const ProductListPerfil: React.FC<Props> = ({ restaurant }) => {
  return (
    <S.RestaurantListContainer>
      <div className="container">
        <S.List>
          {restaurant.map((cardapio) => {
            return (
              <RestaurantPerfil
                key={cardapio.id}
                id={cardapio.id}
                nome={cardapio.nome}
                descricao={cardapio.descricao}
                foto={cardapio.foto}
                porcao={cardapio.porcao}
                preco={cardapio.preco}
              />
            )
          })}
        </S.List>
      </div>
    </S.RestaurantListContainer>
  )
}

export default ProductListPerfil
