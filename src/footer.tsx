function Footer() {
  return (
    <footer className="page-footer blue">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
            <h5 className="white-text">Perfil de Desenvolvimento</h5>
                <p className="grey-text text-lighten-4">Backend - NestJs</p>
                <p className="grey-text text-lighten-4">Frontend - ReactJs</p>
                <p className="grey-text text-lighten-4">Banco de Dados - Oracle</p>
                <p className="grey-text text-lighten-4">Infraestrutura - AWS, VmWare, Linux</p>
            </div>
            {/* <div className="col l3 s12">
                <h5 className="white-text">Parceiros</h5>
                <ul>
                <li><a className="white-text" href="https://www.linkedin.com/in/ronni-novello" target="_blank">Linkedin</a></li>              
                </ul>
            </div> */}
            <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                <li><a className="white-text" href="https://www.linkedin.com/in/ronni-novello" target="_blank">Linkedin</a></li>
                <li><a className="white-text" href="mailto:ronnicorrea@hotmail.com?">E-Mail</a></li>              
                </ul>
            </div>
            
            </div>
            {/* <div className="row">
                <div className="col">
                    <a className="white-text" target="_blank" href="./politica_privacidade"> Política de Privacidade e Proteção a Dados Pessoais  </a>
                </div>
            </div> */}
        </div>      

        <div className="footer-copyright">
            <div className="container center">
            © RCNDev | Todos os direitos reservados 
            </div>
        </div>
    </footer>
  );
}

export default Footer;