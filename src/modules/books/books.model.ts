export interface Book {
  id: string
  title: string
  author: string
  genre: string
}

export interface BookDto {
  title: string | undefined
  author: string | undefined
  genre: string | undefined
}
