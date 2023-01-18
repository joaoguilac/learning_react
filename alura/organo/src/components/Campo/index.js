import './Campo.css';

const Campo = ({ label, type = 'text', valor, placeholder, aoAlterado, obrigatorio = false }) => {

  // const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>
        {label}
      </label>
      <input
        type={type}
        value={valor}
        placeholder={placeholder}
        onChange={aoDigitado}
        required={obrigatorio}
        ></input>
    </div>
  )
}

export default Campo