import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="icones">
        <a href="https://www.facebook.com/">
          <img src='/images/fb.png' alt='ícone do facebook'/>
        </a>
        <a href="https://www.instagram.com/">
          <img src='/images/tw.png' alt='ícone do twitter'/>
        </a>
        <a href="https://twitter.com/">
          <img src='/images/ig.png' alt='ícone do instagram'/>
        </a>
      </section>
      <section>
        <img src="/images/logo.png" alt="organo logo"/>
      </section>
      <section>
        <h3>Desenvolvido por Alura.</h3>
      </section>
    </footer>
  )
}

export default Rodape