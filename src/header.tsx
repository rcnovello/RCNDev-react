
function Header(){

    return(

        <nav className="white" role="navigation">

            <div className="nav-wrapper container">
                <a id="logo-container" href="/">
                    <img src="./img/imgLogoRetangular.png" width="150px" height="50"/>
                </a>
            
                <ul className="right hide-on-med-and-down">
                    <li><a target="_blank" href="https://www.comofazerinformatica.com.br">Acesse: comofazerinformatica.com.br</a></li>
                </ul>


            <ul id="slide-out" className="sidenav">
            <li>
                <div className="user-view">
                
                    <img src="./img/imgLogoRetangular.png" width="50%" height="100%" />
                    <a className="sidenav-close" href="#!"><i className="material-symbols-outlined">cancel_presentation</i></a>

                </div>
            </li>

            <li><a href="https://comofazerinformatica.com.br" target="_blank">Acesse: Como Fazer Informática</a></li>
            
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>

    );

}

export default  Header;