import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../shared/interfaces/IColaborador';

interface TimeProps {
  id: string,
  cor: string,
  nome: string,
  colaboradores: IColaborador[],
  aoDeletar: (id: string) => void,
  aoFavoritar: (id: string) => void,
  mudarCor: (cor: string, id: string) => void
}

const Time = (props: TimeProps) => {
  const css = {
    backgroundColor: hexToRgba(props.cor, '0.2')
  }

  return (
    (props.colaboradores.length > 0) ?
    <section className="time" style={css}>
      <input
        type="color"
        className="input-cor"
        value={props.cor}
        onChange={evento => props.mudarCor(evento.target.value, props.id)} />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(
          colaborador => {
            let colaboradorData = {
              id: colaborador.id,
              nome: colaborador.nome,
              cargo: colaborador.cargo,
              imagem: colaborador.imagem,
              cor: props.cor,
              favorito: colaborador.favorito,
              aoDeletar: props.aoDeletar,
              aoFavoritar: props.aoFavoritar,
              data: colaborador.data
            }

            return <Colaborador
              key={colaborador.id}
              colaborador={colaboradorData} />
          }
        )}
      </div>
    </section>
    : <></>
  )
}

export default Time