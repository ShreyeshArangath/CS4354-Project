import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
    return(
        <header className="header-main__wrapper">
            <Link to='/'>
                <img src={logo}
                    className='header-main__log w3-left'
                    alt="Logo" 
                    title="Logo"
                    width="80" height="80"
                    ></img> 
             </Link>
                <h1 className='header-main__log w3-left'
                > {title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Unter',
}

export default Header