import { PiStorefront } from "react-icons/pi";
import { PiUser } from "react-icons/pi";
import  s  from "./Nav.module.scss";

const Nav = () => {
  return (
    <div id={s.nav}>
      <div className={s.nav__logo}>
        <PiStorefront className={s.icon} /> NFT Marketplace
      </div>
      <div className={s.nav__menu}>
        <ul className={s.menu}>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Rankings</a></li>
          <li><a href="#">Connect a wallet</a></li>
        </ul>
        <button>
          <PiUser /> Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
