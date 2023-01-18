import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css';

const Colaborador = ({id, nome, cargo, imagem, cor, aoDeletar, favorito = false, aoFavoritar}) => {

  const titulo = `Foto de ${nome}`

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  function favoritar() {
    aoFavoritar(id);
  }

  return (
    <div className='colaborador'>
      <AiFillCloseCircle
        size={25}
        className='deletar'
        onClick={() => aoDeletar(id)} />
      <div className='cabecalho' style={{backgroundColor: cor}}>
        <img src={imagem} alt={titulo}/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='favoritar'>
          {favorito 
            ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
            : <AiOutlineHeart {...propsFavorito}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Colaborador