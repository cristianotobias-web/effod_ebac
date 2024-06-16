import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import close from '../../assets/images/close.png'
import { add as addToCart, open } from '../../store/reducers/cart'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export const priceFormated = (price: number) =>
  price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

const MenuRestaurant: React.FC<Props> = ({
  id,
  nome,
  descricao,
  porcao,
  foto,
  preco
}) => {
  const [modal, setModal] = useState(false)
  const closeModal = () => {
    setModal(false)
  }

  const dispatch = useDispatch()

  // Adicionando item ao carrinho
  const handleAddToCart = () => {
    dispatch(addToCart({ id, nome, descricao, porcao, foto, preco }))
    dispatch(open())
    setModal(false)
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <TitleContainer>
          <Title>{nome}</Title>
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
            <img src={foto} alt={nome} />
          </ModalTitle>
          <ModalBody>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>{porcao}</p>
            <Button type="button" onClick={handleAddToCart}>
              Adicionar ao carrinho - {priceFormated(preco)}
            </Button>
          </ModalBody>
          <CloseModal>
            <img src={close} alt="Icon close" onClick={closeModal} />
          </CloseModal>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MenuRestaurant
