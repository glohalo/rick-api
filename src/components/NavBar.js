import LogoNav from './LogoNav.svg';
import './styles.css';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
      <div  id='flex-nav'>
          <div class='flex-item'>
            <Link to={'/'}><img width="35em" height="35em" src={LogoNav}  alt="logo"/></Link>
            
          </div>         
          <div class='raw-item'>
            <Link to={'/'}><p>Inicio</p></Link>
          </div>      
      </div>
    );
  }
  
  export default NavBar;