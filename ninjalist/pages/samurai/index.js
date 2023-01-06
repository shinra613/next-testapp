import styles from "../../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props : {samurais : data}
  }
}
 


const SamuraiList = ({samurais}) => {
    return (
        <>
        <Head>
        
        <title>Samurai List | List</title>
       
      </Head>
        <div className={styles.mainContent}>
          <div className={styles.listTitle}>
          <h1>All Samurais</h1>
          </div>
          
          <div  className={styles.listContent}>
          {samurais.map(samurai => (
            <Link href={"/samurai/"+samurai.id} className={styles.listCard} key={samurai.id}>
              
                <h3>{samurai.name}</h3>
                   
            </Link>
          ))}</div>
    </div> </>  );
}
 
export default SamuraiList;