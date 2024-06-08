import Button from '../Button'
import Tag from '../Tag'
import { Card, Description, Title, TitleContainer } from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const addTheCart = () => {
  alert('building')
}
const ProductPerfil = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <Description>{description}</Description>
    <Button type="button" onClick={addTheCart}>
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default ProductPerfil
