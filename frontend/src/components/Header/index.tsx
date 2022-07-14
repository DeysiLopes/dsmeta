import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta logo" />
                <h1>DSMeta</h1>
                <p>
                Desenvolvido por 
                <a target="_blank"href="https://github.com/DeysiLopes"> Deysi Lopes</a>
                </p>
                </div>
        </header>
    )
}
    
export default Header