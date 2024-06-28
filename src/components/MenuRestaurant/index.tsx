import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button' // Componente de botão

import close from '../../assets/images/close.png' // Ícone de fechar modal
import { add as addToCart, open } from '../../store/reducers/cart' // Ações Redux para adicionar ao carrinho e abrir carrinho
import { parseToBrl } from '../../utils' // Função utilitária para formatação de moeda

import * as S from './styles' // Estilos estilizados do componente

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

/**
 * Componente para exibir um item do menu do restaurante.
 */
const MenuRestaurant: React.FC<Props> = ({
  id,
  nome,
  descricao,
  porcao,
  foto,
  preco
}) => {
  const [modal, setModal] = useState(false) // Estado para controlar a exibição do modal

  // Função para fechar o modal
  const closeModal = () => {
    setModal(false)
  }

  const dispatch = useDispatch() // Hook para despachar ações Redux

  // Função para adicionar o item ao carrinho
  const handleAddToCart = () => {
    dispatch(addToCart({ id, nome, descricao, porcao, foto, preco })) // Despacha a ação de adicionar ao carrinho com os dados do item
    dispatch(open()) // Abre o carrinho após adicionar o item
    setModal(false) // Fecha o modal após adicionar ao carrinho
  }

  return (
    <>
      <S.Card>
        <img src={foto} alt={nome} /> {/* Imagem do item */}
        <S.TitleContainer>
          <S.Title>{nome}</S.Title> {/* Nome do item */}
        </S.TitleContainer>
        <S.Description>{descricao}</S.Description> {/* Descrição do item */}
        <Button
          type="button"
          onClick={() => {
            setModal(true)
          }}
        >
          Mais detalhes
        </Button>{' '}
        {/* Botão para abrir o modal com mais detalhes */}
      </S.Card>

      {/* Modal para exibir mais detalhes do item */}
      <S.Modal className={modal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <S.ModalTitle>
            <img src={foto} alt={nome} /> {/* Imagem no título do modal */}
          </S.ModalTitle>
          <S.ModalBody>
            <h4>{nome}</h4> {/* Nome do item no modal */}
            <p>{descricao}</p> {/* Descrição do item no modal */}
            <p>{porcao}</p> {/* Porção do item no modal */}
            <Button type="button" onClick={handleAddToCart}>
              Adicionar ao carrinho - {parseToBrl(preco)}
            </Button>{' '}
            {/* Botão para adicionar o item ao carrinho */}
          </S.ModalBody>
          <S.CloseModal>
            <img src={close} alt="Icon close" onClick={closeModal} />{' '}
            {/* Ícone para fechar o modal */}
          </S.CloseModal>
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default MenuRestaurant
