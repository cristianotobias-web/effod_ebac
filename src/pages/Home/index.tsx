import ProductList from '../../components/ProductsList'
import hiokiSushi from '../../assets/images/hioki_sushi.png'
import laDolceVitaTrattoria from '../../assets/images/la_dolce_vita_trattoria.png'
import Food from '../../models/Foods'
import Header from '../../components/Header'

const promocoes: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    grade: '5.0',
    infos: ['Destaque da semana', 'Japonesa'],
    image: hiokiSushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    grade: '5.0',
    infos: ['Japonesa'],
    image: hiokiSushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    grade: '5.0',
    infos: ['Italiana'],
    image: laDolceVitaTrattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    grade: '5.0',
    infos: ['Italiana'],
    image: laDolceVitaTrattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    grade: '5.0',
    infos: ['Italiana'],
    image: laDolceVitaTrattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    grade: '5.0',
    infos: ['Italiana'],
    image: laDolceVitaTrattoria,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

// const emBreve: Food[] = [
//   {
//     id: 5,
//     title: 'Diablo 4',
//     grade: '5.0',
//     infos: ['5/04'],
//     image: pizzaMarguerita,
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.'
//   },
//   {
//     id: 6,
//     title: 'Star Wars Jedi Survivor',
//     grade: '5.0',
//     infos: ['5/04'],
//     image: pizzaMarguerita,
//     description:
//       'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...'
//   },
//   {
//     id: 7,
//     title: 'Street Fighter 6',
//     grade: '5.0',
//     infos: ['5/04'],
//     image: pizzaMarguerita,
//     description:
//       'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.'
//   },
//   {
//     id: 8,
//     title: 'The Legend of Zelda - TOK',
//     grade: 'RPG',
//     infos: ['5/04'],
//     image: pizzaMarguerita,
//     description:
//       'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...     '
//   }
// ]

const Home = () => (
  <>
    <Header />
    <ProductList foods={promocoes} />
    {/* <ProductList foods={emBreve} /> */}
  </>
)

export default Home
