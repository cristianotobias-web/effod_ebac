import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Componente ScrollToTop
 *
 * Este componente faz a rolagem automática da janela para o topo sempre que
 * o caminho da URL (pathname) mudar. Ele é útil em aplicações de página única
 * (SPA) para garantir que o usuário veja o topo da nova página ao navegar.
 *
 * O hook useEffect é utilizado para monitorar mudanças no pathname e,
 * quando uma mudança é detectada, a função window.scrollTo(0, 0) é chamada
 * para rolar a janela até o topo.
 *
 * O componente não renderiza nada na interface e retorna null.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
