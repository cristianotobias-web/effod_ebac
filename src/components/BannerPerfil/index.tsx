import Tag from '../Tag'

import * as S from './styles'

interface BannerPerfilProps {
  restaurant: Food
}

const BannerPerfil: React.FC<BannerPerfilProps> = ({ restaurant }) => (
  <S.Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <Tag size="big">{restaurant.titulo}</Tag>
      <div>
        <S.Title>{restaurant.titulo}</S.Title>
      </div>
    </div>
  </S.Image>
)

export default BannerPerfil
