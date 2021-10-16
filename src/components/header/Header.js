import './Header.css';
import logo from '../../logo.svg'


const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="Maines Industries Logo" />
                <h1>Resume Creator</h1>
            </div>              
        </div>
    )
}

export default Header
