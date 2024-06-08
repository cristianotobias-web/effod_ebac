import pizzaMarguerita from '../../assets/images/pizza_marguerita.png'
import Food from '../../models/Foods'
import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductListPerfil from '../../components/ProductsListPerfil'

const promocoes: Food[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    grade: '5.0',
    infos: ['R$199,90', '-10%'],
    image: pizzaMarguerita,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
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

const Perfil = () => (
  <>
    <HeaderPerfil />
    <BannerPerfil />
    <ProductListPerfil foods={promocoes} />
    {/* <ProductList foods={emBreve} /> */}
  </>
)

export default Perfil
