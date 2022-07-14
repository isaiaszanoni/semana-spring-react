import logo from '../../assets/img/logo.svg';

import './style.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-header-container">
                    <img src={logo} />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por 
                        <a href="https://instagram.com/devsuperior">@devsuperior.ig</a>
                    </p>
                </div>
            </header>
        </>
    )

}

export default Header;
