import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import logo from '../../assets/nova-logo-color-negative.svg';
import style from './Navbar.module.scss';

const Navbar = () => (
  <nav className={style.navbar}>
    <div className={style.imgContainer}>
      <Link to={ROUTES.NOMINATIONS}>
        <img
          src={logo}
          alt=""
          loading="lazy"
        />
      </Link>
    </div>
  </nav>
);

export default Navbar;
