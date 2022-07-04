import style from './Navbar.module.scss';

const Navbar = () => (
  <nav className={style.navbar}>
    <div className={style.imgContainer}>
      <img
        src="https://uploads-ssl.webflow.com/616d7e7e1575a96ad548e2f9/61c2da41711f01a31291084e_nova-logo-color-negative.svg"
        alt=""
        loading="lazy"
      />
    </div>
  </nav>
);

export default Navbar;
