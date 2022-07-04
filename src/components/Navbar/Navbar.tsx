import logo from '../../assets/nova-logo-color-negative.svg';
import style from './Navbar.module.scss';

const Navbar = () => (
  <nav className={style.navbar}>
    <div className={style.imgContainer}>
      <img
        src={logo}
        alt=""
        loading="lazy"
      />
    </div>
  </nav>
);

export default Navbar;
