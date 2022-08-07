import { Link } from 'react-router-dom';
import { CgProfile} from 'react-icons/cg';
export function Navbar() {


 
    return (
     <ul className='nav'>



        <li className='logo-nav'><Link to={'/'}> <img src="/ICast.png" alt="logo" width='35px' height="36" /></Link></li>
        <li className='title'><Link to={'/library'}>المكتبة</Link></li>
        <li><Link to={'/prodcast'}>بودكاست</Link></li>
        <li><Link to={'/register'}> تسجيل </Link> </li>
      <li> <Link to={'/login'}> تسجيل دخول </Link> </li>

        <li className='search-nav'><input type="text" placeholder="البحث" className='input' /></li>
        <li className='search-nav-1'><Link to={'/profile'}> <CgProfile size={20} /></Link></li>
      </ul>
      
    )}

