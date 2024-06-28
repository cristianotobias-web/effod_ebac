import { CircleLoader } from 'react-spinners' // Importa o componente de loader circular
import { colors } from '../styles' // Importa as cores definidas no arquivo de estilos

/**
 * Componente de loader circular.
 * Utiliza o CircleLoader do pacote react-spinners para exibir um indicador de carregamento.
 */
const Loader = () => (
  <CircleLoader color={colors.pink} size={50} /> // Define a cor e o tamanho do loader
)

export default Loader
