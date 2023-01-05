import Link from "next/link"

const Navbar = () => {
    return (<nav>
        <div>
        <h1>Samurai List</h1>
        </div>
        <Link href='/'>Home</Link> 
        <Link href='/about'>About</Link> 
        <Link href='/samurai/samurai'>Samurai Listings</Link> 
    </nav>  );
}
 
export default Navbar;