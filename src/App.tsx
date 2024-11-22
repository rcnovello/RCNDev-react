import './App.css'; // Importando seus estilos personalizados
import imagemLocal from './assets/bg2.jpg'; // Importando a imagem local
import Footer from './footer';
import Header from './header';

function App() {
  return (
    
    <div>
      <div>
        {/* Import Footer */}
        <Header />
      </div>
      {/* Parallax Container */}
      <div
        className="parallax-container d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${imagemLocal})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >                        
        
        <div className="container mt-5">

          <p><img className="responsive-img" src="/img/imgLogoRetangular.png" alt="Parallax Test" /></p>
          
          <p><h2>Visualizações incríveis para impusionar seu website</h2></p>

          <p>
              
          <a href="https://wa.me/19998986530" target='_blank' className="btn btn-primary btn-lg" role="button">Entre em contato</a>

          </p>
        </div>
      </div>

      {/* Conteúdo adicional */}

      <div className="section">

        <div className="row">

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-symbols-outlined">flash_on</i></h2>
              <h5 className="center">Criação de website personalizado</h5>
                <p className="center">Divulgue seu produto ou serviço na internet.</p>
              </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-symbols-outlined">group</i></h2>
              <h5 className="center">Consultoria e monitoramento</h5>
                <p className="center">Melhoria contínua na exposição de seu produto ou serviço, se atualizando as novas tecnologias e mecanismos de divulgação na internet.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-symbols-outlined">code</i></h2>
              <h5 className="center">Tecnologias de Desenvolvimento</h5>
                <p className="center">Análise para desenvolvimento de aplicações web, mobile e desktop.</p>
              </div>
          </div>

        </div>
        
      </div>  

      <div className="section">
        <div className="row center">
          
          <div className="col s12 center">
            <h3><i className="mdi-content-send brown-text"></i></h3>
            <h4>Como posso lhe ajudar ? Entre em contato!</h4>      
          </div>
        </div>

        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">share</i>
              <a href="https://www.linkedin.com/in/ronni-novello" target="_blank">Linkedin</a>
            </div>
            <div className="collapsible-body"><p></p></div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>
              <a href="https://github.com/rcnovello?tab=repositories" target="_blank">Github</a>      
              <span className="new badge">5 Projects</span></div>
            <div className="collapsible-body"><p></p></div>
          </li>
        </ul>    
      </div>

      {/* Parallax Section 3 */}
      <div
        className="parallax-container d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${imagemLocal})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >         

        <div className="section no-pad-bot no-margin-mobile">       

          <div className="container no-margin-mobile">
            <div className="row center">
              <div className="row"><h5>Sites responsivos para sua empresa, loja virtual, blog, portfólios, e outros tipos de serviços.</h5>
              </div>
              
              <div className="row">           
                <p><img className="responsive-img" src="/img/imgModelosSItesSemFundo.png"/></p>
              </div>                
              
            </div>
          </div>

          <div className="container"> 
            <div className="row center">              
                <h5>Clientes</h5>
            </div>

            <div className="row center">                
              <div className="col s3">                  
                <span className="material-symbols-outlined">
                  shoppingmode
                  </span>
                <p><a className="white-text text-darken-2" href="https://www.frprodutos.com.br" target="_blank">FRProdutos</a></p>
              </div>                
              <div className="col s3">
                <span className="material-symbols-outlined">
                  rss_feed
                  </span>
                <p><a className="white-text text-darken-2" href="https://www.comofazerinformatica.com.br" target="_blank">Como Fazer Infomatica</a></p>
              </div>  
              <div className="col s3">
                <span className="material-symbols-outlined">
                  work
                  </span>
                  <p><a className="white-text text-darken-2" href="#" target="_blank">Adv.Serviços Jurídicos</a></p>
              </div>     
              <div className="col s3">
                <span className="material-symbols-outlined">
                  candlestick_chart
                  </span>
                <p><a className="white-text text-darken-2" href="#" target="_blank">Invest</a></p>
              </div>
            </div>  
                                
          </div> 
        </div>  

      {/* End parallax Section 3 */}     
      </div>

      <div>
      {/* Import Footer */}
      <Footer />
    </div>

    {/* End Index */}
    </div>

  );
}


export default App;
