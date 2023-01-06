import Link from "next/link"
import styles from "../styles/Home.module.css"

const Navbar = () => {
    return (<nav className={styles.navbar}>
        <div>
        <h1 >Samurai List</h1>
        </div>
        <div>
        <Link href='/'>Home</Link> 
        <Link href='/about'>About</Link> 
        <Link href='/samurai/samurai'>Samurai Listings</Link> </div>
    </nav>  );
}
 
export default Navbar;