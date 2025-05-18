import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import styles from "./Nav.module.css"
function Nav() {
  return (
    <nav>
      <ul className={styles.navContainer}>
        <li>
          <Link to={"/"} className={styles.navLink}>
            <FaHome className={styles.navIcon}/>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className={styles.navLink}>
            <LuShoppingCart  className={styles.navIcon}/>
            <span className={styles.cartCounter}>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
