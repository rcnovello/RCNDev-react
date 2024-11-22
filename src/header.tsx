
function Header(){

    return(

        <div className="container-fluid">
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">

                    <a id="logo-container" href="/">       
                        <p><img className="responsive-img" src="/img/imgLogoRetangular.png" width="150px" height="50"/></p>
                    </a>

            

                    <ul id="slide-out" className="sidenav">
                        <li><a className="sidenav-close" href="#!"><i className="material-symbols-outlined">
                            cancel_presentation
                        </i></a></li>
                        <li><a target="_blank" href="https://www.comofazerinformatica.com.br" data-target="nav-mobile" className="sidenav-trigger">Acesse: ComoFazerInformatica</a></li>
                    </ul>

                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    
                </div>
            </nav>
        </div>  

    );

}

export default  Header;