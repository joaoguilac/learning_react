import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void,
  times: string[],
  cadastrarTime: (time: ITime) => void
}

const Formulario = (props: FormularioProps) => {
  
  const id = uuidv4();
  const aoDeletar = (id: string) => {};
  const aoFavoritar = (id: string) => {};
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [data, setData] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('#000000');

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      id,
      nome,
      cargo,
      imagem,
      aoDeletar,
      aoFavoritar,
      time,
      data
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setData('');
  }


  return (
    <section className="formulario">
      <form onSubmit={evento => aoSalvar(evento)}>
        <h2>Preencha os dados para o criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valorAlterado => setNome(valorAlterado)} />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valorAlterado => setCargo(valorAlterado)} />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valorAlterado => setImagem(valorAlterado)} />
        <Campo
          label="Data de entrada no time"
          tipo="date"
          placeholder=""
          valor={data}
          aoAlterado={valorAlterado => setData(valorAlterado)} />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valorAlterado => setTime(valorAlterado)} />
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={evento => {
        evento.preventDefault();
        props.cadastrarTime({ nome: nomeTime, cor: corTime })
        setNomeTime('');
        setCorTime('#000000');
      }}>
        <h2>Preencha os dados para o criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={valorAlterado => setNomeTime(valorAlterado)} />
        <Campo
          obrigatorio
          tipo="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={valorAlterado => setCorTime(valorAlterado)} />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  )
}

export default Formulario