import styles from "../../styles/Home.module.css"
import Head from "next/head"

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
          <h1>The List</h1>
          {samurais.map(samurai => (
            <div key={samurai.id}>
              <a>
                <h3>{samurai.name}</h3>
                   </a>
            </div>
          ))}
    </div> </>  );
}
 
export default SamuraiList;