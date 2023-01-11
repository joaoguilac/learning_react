import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, cor}) => {

  const titulo = `Foto de ${nome}`

  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor: cor}}>
        <img src={imagem} alt={titulo}/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador