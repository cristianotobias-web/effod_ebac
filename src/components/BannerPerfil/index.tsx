import { Image, Title } from './styles'
import bannerImg from '../../assets/images/background_image.png'
import Tag from '../Tag'

const BannerPerfil = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Italiana</Tag>
      <div>
        <Title>La Doce Vita Trattoria</Title>
      </div>
    </div>
  </Image>
)

export default BannerPerfil
