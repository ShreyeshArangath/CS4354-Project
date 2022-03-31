import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
    return(
        <header className="Unter-header">
            <div className="header-main__wrapper">
                <Link to='/'>
                <img src={logo}
                    alt="Logo" 
                    title="Logo"
                    align="Left"
                    max-width=".70"
                    height="auto"></img> 
                </Link>
                <h1 className="header-main__logo"> {title} </h1>
            </div>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Unter',
}

export default Header