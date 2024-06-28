import Tag from '../Tag' // Componente de tag para categorias e destaque
import Button from '../Button' // Componente de botão para o link "Saiba mais"

import starGrade from '../../assets/images/star_77949.png' // Ícone de grade de estrela

import * as S from './styles' // Estilos estilizados do componente

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  image: string
  destacado: boolean
  tipo: string
}

/**
 * Componente para exibir informações de um restaurante.
 */
const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  image,
  destacado,
  tipo,
  id
}: Props) => (
  <S.Card>
    <img src={image} alt={titulo} /> {/* Imagem do restaurante */}
    <S.CategoriesContainer>
      {destacado && <Tag size="normal">Destaque da semana</Tag>}{' '}
      {/* Tag se o restaurante for destaque */}
      <Tag size="normal">{tipo}</Tag> {/* Tag com o tipo do restaurante */}
    </S.CategoriesContainer>
    <S.CardContent>
      <S.TitleContainer>
        <S.Title>{titulo}</S.Title> {/* Título do restaurante */}
        <S.GradeContainer>
          {avaliacao}
          <img src={starGrade} alt="Star grade" /> {/* Ícone de avaliação */}
        </S.GradeContainer>
      </S.TitleContainer>
      <S.Description>{descricao}</S.Description>{' '}
      {/* Descrição do restaurante */}
      <Button type="link" to={`perfil/${id}`}>
        Saiba mais
      </Button>{' '}
      {/* Botão "Saiba mais" que direciona para o perfil do restaurante */}
    </S.CardContent>
  </S.Card>
)

export default Restaurant
