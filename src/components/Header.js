import HeaderRick from './HeaderRick.svg';
import './styles.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div id='Header-logo'>
            <Link to={'/'}>
                <img src={HeaderRick}  alt="logo"/>
            </Link>
            
        </div> 
    );
}

export default Header;