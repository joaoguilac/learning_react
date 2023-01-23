import './Campo.css';

interface CampoProps {
  aoAlterado: (valor: string) => void,
  label: string,
  valor: string,
  placeholder: string,
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color',
  obrigatorio?: boolean
}

const Campo = ({ label, valor, placeholder, aoAlterado, tipo = 'text', obrigatorio = false } :CampoProps) => {

  // const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className={`campo campo-${tipo}`}>
      <label>
        {label}
      </label>
      <input
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={aoDigitado}
        required={obrigatorio}
        ></input>
    </div>
  )
}

export default Campo