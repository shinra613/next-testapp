import Link from "next/link";
import styles from "../styles/Home.module.css"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {


    const router = useRouter(); 
    
    useEffect(() => { 
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])

    return (<div className={styles.mainContent}>
        <h1>Oooops......</h1>
        <h2>aint nothing but  samurai here.</h2>
        <p>Go back to the <Link href="/">Home page</Link></p>
    </div>  );
}
 
export default NotFound;