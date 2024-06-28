import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

/**
 * Componente Rotas
 *
 * Este componente define as rotas principais da aplicação usando react-router-dom.
 * Ele mapeia caminhos específicos para os componentes correspondentes que devem
 * ser renderizados quando esses caminhos são acessados.
 *
 * - A rota "/" renderiza o componente Home.
 * - A rota "/perfil/:id" renderiza o componente Perfil, onde ":id" é um parâmetro dinâmico da rota.
 */
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
