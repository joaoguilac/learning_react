export interface IColaborador {
  id: string,
  nome: string,
  cargo: string,
  imagem: string,
  cor?: string,
  favorito?: boolean,
  aoDeletar: (id: string) => void,
  aoFavoritar: (id: string) => void,
  time?: string,
  data: string
}