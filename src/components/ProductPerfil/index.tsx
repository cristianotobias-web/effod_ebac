import { useState } from 'react'
import Button from '../Button'
import {
  Card,
  CloseModal,
  Description,
  Modal,
  ModalBody,
  ModalContent,
  ModalTitle,
  Title,
  TitleContainer
} from './styles'
import close from '../../assets/images/close_1.png'

type Props = {
  titulo: string
  descricao: string
  image: string
  porcao: string
  preco: number
  addToCart: () => void
}
const ProductPerfil: React.FC<Props> = ({
  titulo,
  descricao,
  porcao,
  image,
  preco,
  addToCart
}) => {
  const [modal, setModal] = useState(false)
  const closeModal = () => {
    setModal(false)
  }
  // Formatar o preço como string de moeda
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return (
    <>
      <Card>
        <img src={image} alt={titulo} />
        <TitleContainer>
          <Title>{titulo}</Title>
        </TitleContainer>
        <Description>{descricao}</Description>
        <Button
          type="button"
          onClick={() => {
            setModal(true)
          }}
        >
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modal ? 'visible' : ''}>
        <ModalContent className="container">
          <ModalTitle>
            <img src={image} alt={titulo} />
          </ModalTitle>
          <ModalBody>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>{porcao}</p>
            <Button type="button" onClick={addToCart}>
              Adicionar ao carrinho - {precoFormatado}
            </Button>
          </ModalBody>
          <CloseModal>
            <img src={close} alt="Icon close" onClick={() => closeModal()} />
          </CloseModal>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProductPerfil
