import Tag from '../Tag'
import {
  Card,
  CategoriesContainer,
  Description,
  Title,
  TitleContainer,
  CardContent,
  GradeContainer
} from './styles'
import starGrade from '../../assets/images/star_77949.png'
import Button from '../Button'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  image: string
  destacado: boolean
  tipo: string
}

const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  image,
  destacado,
  tipo,
  id
}: Props) => (
  <Card>
    <img src={image} alt={titulo} />
    <CategoriesContainer>
      {destacado && <Tag size="normal">Destaque da semana</Tag>}
      <Tag size="normal">{tipo}</Tag>
    </CategoriesContainer>
    <CardContent>
      <TitleContainer>
        <Title>{titulo}</Title>
        <GradeContainer>
          {avaliacao}
          <img src={starGrade} alt="Star grade" />
        </GradeContainer>
      </TitleContainer>
      <Description>{descricao}</Description>
      <Button type="link" to={`perfil/${id}`}>
        Saiba mais
      </Button>
    </CardContent>
  </Card>
)

export default Restaurant
