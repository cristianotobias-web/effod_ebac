import { useDispatch, useSelector } from 'react-redux' // Importação dos hooks do Redux para dispatch e seleção de estado

import { RootReducer } from '../../store' // Importação do tipo de estado raiz do Redux
import logo from '../../assets/images/logo.svg' // Importação do logo da aplicação
import { open } from '../../store/reducers/cart' // Ação para abrir o carrinho

import * as S from './styles' // Importação dos estilos estilizados

/**
 * Componente de cabeçalho para o perfil do usuário.
 * Exibe opções de navegação e informações do carrinho.
 */
const HeaderPerfil: React.FC = () => {
  const dispatch = useDispatch() // Hook para despachar ações Redux
  const { items } = useSelector((state: RootReducer) => state.cart) // Estado dos itens no carrinho obtido do estado Redux

  /**
   * Função para abrir o carrinho.
   */
  const openCart = () => {
    dispatch(open()) // Dispara a ação para abrir o carrinho
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <S.StyledLink to="/">Restaurantes</S.StyledLink>{' '}
        {/* Link para a página inicial */}
        <S.Logo src={logo} alt="Logo" /> {/* Logo da aplicação */}
        <S.CartHeaderPerfil>
          <S.CartCount>{items.length}</S.CartCount>{' '}
          {/* Contador de itens no carrinho */}
          <S.CartButton onClick={openCart}>
            produto(s) no carrinho
          </S.CartButton>{' '}
          {/* Botão para abrir o carrinho */}
        </S.CartHeaderPerfil>
      </div>
    </S.HeaderBar>
  )
}

export default HeaderPerfil
