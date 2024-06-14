import { Food } from '../../pages/Home'

import { Image, Title } from './styles'
import Tag from '../Tag'

interface BannerPerfilProps {
  restaurant: Food
}

const BannerPerfil: React.FC<BannerPerfilProps> = ({ restaurant }) => (
  <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <Tag size="big">{restaurant.titulo}</Tag>
      <div>
        <Title>{restaurant.titulo}</Title>
      </div>
    </div>
  </Image>
)

export default BannerPerfil
