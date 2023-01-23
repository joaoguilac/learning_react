import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IColaborador } from '../../shared/interfaces/IColaborador';
import './Colaborador.css';

interface ColaboradorProps {
  colaborador: IColaborador
}

const Colaborador = ({ colaborador }: ColaboradorProps) => {

  const titulo = `Foto de ${colaborador.nome}`

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  function favoritar() {
    colaborador.aoFavoritar(colaborador.id);
  }
  
  return (
    <div className='colaborador'>
      <AiFillCloseCircle
        size={25}
        className='deletar'
        onClick={() => colaborador.aoDeletar(colaborador.id)} />
      <div className='cabecalho' style={{backgroundColor: colaborador.cor}}>
        <img src={colaborador.imagem} alt={titulo}/>
      </div>
      <div className='rodape'>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <h5>{new Date(colaborador.data).toLocaleDateString()}</h5>
        <div className='favoritar'>
          {colaborador.favorito 
            ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
            : <AiOutlineHeart {...propsFavorito}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Colaborador