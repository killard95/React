import { useState, useEffect } from 'react';
import Display from './Display';

export default function FetchQuery() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const adress = ["posts", "comments", "albums", "photos", "todos", "users"];
    const option = "?_limit=5";
  
    useEffect(
      () => {
        // Traitement des données (requetes fetch)
        fetch('https://jsonplaceholder.typicode.com/'+adress[0]+option )
       

        // limite à 8 le nombre de data récup
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
        .then((response)=>{
        if(!response.ok){
          throw new Error('L\'Api ne répond pas !')
        }
        return response.json()
      })
        .then((actualData)=>{
          setData(actualData)
          setError(null)
          console.log(actualData)
        })
        .catch((err)=> {
          setError(err.message);
          console.log(err.message);
        })
        .finally(
          ()=>{
            setLoading(false);
          }
        )
      },
      // Tableau des dépendances éventuelles (qui déclenche l'effet)
      []
    )
    return(
      <>
      <h5>requete fetch vers API</h5>
      { loading && <div>loading...</div>}
      { error && <div>erreur : {error}</div> }
      <Display />
      </>
    )
}