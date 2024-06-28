import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/Instagram.svg'
import facebook from '../../assets/images/facebook_icon.png'
import x_icon from '../../assets/images/x_icon.png'

import * as S from './styles'

/**
 * Componente Footer
 *
 * Este componente renderiza o rodapé da aplicação, que inclui:
 * - Um logotipo que redireciona para a página inicial.
 * - Links para redes sociais (Instagram, Facebook e X).
 * - Uma mensagem informativa sobre a plataforma Efood.
 *
 * Os estilos são importados do módulo './styles' e aplicados aos elementos
 * do componente para garantir uma aparência consistente.
 */
const Footer = () => (
  <S.ContainerFooter>
    <div className="container">
      <S.SectionFooter>
        <Link to="/">
          <S.Logo src={logo} alt="Logo" />
        </Link>
        <S.Links>
          <li>
            <S.LinkFooter
              href="https://www.instagram.com/cristiano.tobias40/"
              target="_blank"
            >
              <img src={instagram} alt="Instagram Icon" />
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter
              href="https://www.facebook.com/profile.php?id=100001312863310"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Icon" />
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter href="https://x.com/CTobias40" target="_blank">
              <img src={x_icon} alt="X icon" />
            </S.LinkFooter>
          </li>
        </S.Links>
        <p>
          A Efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.SectionFooter>
    </div>
  </S.ContainerFooter>
)

export default Footer
