import Link from "next/link"
import styles from "../styles/Home.module.css"
import Image from "next/image"

const Navbar = () => {
    return (<nav className={styles.navbar}>
        <div>
            <Image src="/samurai.png" width={100} height={100} />
        </div>
        <div>
        <Link href='/'>Home</Link> 
        <Link href='/about'>About</Link> 
        <Link href='/samurai/samurai'>Samurai Listings</Link> </div>
    </nav>  );
}
 
export default Navbar;