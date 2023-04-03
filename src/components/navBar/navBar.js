import { Link } from "react-router-dom";
import styles from "./navBar.module.scss"

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
            <h4>Awesome<span>logo</span></h4>
            <div className={styles.navMenu}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/hotels">Hotels</Link></li>
                    <li><Link to="/order">My order</Link></li>
                </ul>
            </div>
            <div className={styles.navSign}>
            <ul className="ul-sign">
                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/signUp">Sign up</Link></li>
                </ul>
            </div>  
            </div>
            
        </header>
    )
}

export default NavBar;