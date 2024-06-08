class Food {
  id: number
  title: string
  grade: string
  description: string
  image: string
  infos: string[]

  constructor(
    id: number,
    title: string,
    grade: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.grade = grade
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Food
