import styles from "../../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"


export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(samurai=>{
        return {
            params:{id: samurai.id.toString()}
        }
    })
  
    return {
      paths,
      fallback: false
    }
  }
 
  
  export const getStaticProps = async (context) => {
      const id =  context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json();
  
    return {
      props : {samurai : data}
    }
  }
   

const Details = ({samurai}) => {

   
    return ( <div className={styles.detailContent}>
        <h1>{samurai.name}</h1>
        <p>{samurai.email}</p>
        <p>{samurai.address.city}</p>
        <p>{samurai.phone}</p>
    </div> );
}
 
export default Details;