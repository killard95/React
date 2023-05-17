import { useState, useEffect } from "react";
import FormAdress from "./FormAdress";
import Accueil from "./Accueil";

export default function Details({i, setI}){

  const [Placeholder, setPlaceholder] = useState("posts");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();



  // useEffect(
  //   () => {
  // Traitement des données (requetes fetch)
  fetch("https://jsonplaceholder.typicode.com/users/"+{i}+"/posts")
    // limite à 8 le nombre de data récup
    // fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
    .then((response) => {
      if (!response.ok) {
        throw new Error("L'Api ne répond pas !");
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
      console.log(actualData);
    })
    .catch((err) => {
      setError(err.message);
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
  //   }
  // Tableau des dépendances éventuelles (qui déclenche l'effet)
  //   []
  // )

 
 
  return (
    <>
    {/* <Details usersToDetails={id} /> */}
      {/* <form>
        <select placeholder="posts" onChange={handleChange}>
          {adress.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </form> */}
      {/* <input type="number" placeholder="25" value={limit} onChange={handleChange}/> */}
      {/* <button  onClick={handleSubmit}>Limit</button> */}
      {data &&
        data.map(({ id, title, body }) => (
          <ul>
            <li key={id}>
              <h1>{id}</h1>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          </ul>
        ))}
    </>
  );
}


