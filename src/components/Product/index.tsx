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
  title: string
  grade: string
  description: string
  image: string
  infos: string[]
}

const Product = ({ title, grade, description, image, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <CategoriesContainer>
      {infos.map((info) => (
        <Tag size="normal" key={info}>
          {info}
        </Tag>
      ))}
    </CategoriesContainer>
    <CardContent>
      <TitleContainer>
        <Title>{title}</Title>
        <GradeContainer>
          <img src={starGrade} alt="Star grade" />
          {grade}
        </GradeContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <Button type="link" to="/perfil">
        Saiba mais
      </Button>
    </CardContent>
  </Card>
)

export default Product
