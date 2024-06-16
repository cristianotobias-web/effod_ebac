import { Link } from 'react-router-dom'
import {
  ContainerFooter,
  Links,
  Link as LinkFooter,
  SectionFooter,
  Logo
} from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/Instagram.svg'
import facebook from '../../assets/images/facebook_icon.png'
import x_icon from '../../assets/images/x_icon.png'

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <SectionFooter>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <Links>
          <li>
            <LinkFooter
              href="https://www.instagram.com/cristiano.tobias40/"
              target="_blank"
            >
              <img src={instagram} alt="Instagram Icon" />
            </LinkFooter>
          </li>
          <li>
            <LinkFooter
              href="https://www.facebook.com/profile.php?id=100001312863310"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Icon" />
            </LinkFooter>
          </li>
          <li>
            <LinkFooter href="https://x.com/CTobias40" target="_blank">
              <img src={x_icon} alt="X icon" />
            </LinkFooter>
          </li>
        </Links>
        <p>
          A Efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </SectionFooter>
    </div>
  </ContainerFooter>
)

export default Footer
