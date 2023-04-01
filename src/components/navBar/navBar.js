import styles from "./navBar.module.scss"

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navmenu}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/hotels">Hotels</a></li>
                    <li><a href="/order">My order</a></li>
                </ul>
                <ul>
                    <li><a href="/signIn">Sign in</a></li>
                    <li><a href="/signUn">Sign up</a></li>
                </ul>
            </div>
            
        </header>
    )
}

export default NavBar;