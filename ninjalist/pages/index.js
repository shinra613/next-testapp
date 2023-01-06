import Head from "next/head"
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
<>
      <Head>
        
        <title>Samurai List | Home</title>
       
      </Head>
      
    <div className={styles.mainContent}>
      <h1>The Samurai List</h1>
     <p>Sunt et eu commodo exercitation elit sit tempor qui exercitation. Fugiat dolor cillum irure tempor ad ea. Sit est officia reprehenderit dolore culpa est id non.</p>
        <Link href='/samurai'><button>See the Samurai List</button></Link> 
      </div>
      </>
  )
}
