import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Accueil() {
  return (
    <>
    <NavBar />
      <h1>WELCOME</h1>
      <Users />
    </>
  );
}

export function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Page1">Page1</NavLink>
          </li>
          {/* <li>
            <NavLink to="/page2">page2</NavLink>
          </li>
          <li>
            <NavLink to="/TodoList">TodoList</NavLink>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}


export function Users() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState([]);
  const usersToDetails = ()=>{
    setI(i)
  }
 

const API = "https://jsonplaceholder.typicode.com/users"


  useEffect(
    () => {
  fetch(API)
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
    }
  // Tableau des dépendances éventuelles (qui déclenche l'effet)
    // []
  )
 
    return (
      <>
        {data &&
          data.map(
            ({
              id,
              name,
              email,
              username,
              phone,
              website
            }) => (
              <ul>
                <li key={id}>
                  <h1>{id}</h1>
                  <img src={"https://robohash.org/"+username+".png"} />
                  {/* <NavLink to="/Details" onClick={()=>setI(id)} i={id} setI={setI}><h3>{name}</h3></NavLink> */}
                  <a href={"https://jsonplaceholder.typicode.com/users/"+id+"/posts"}><h3>{name}</h3></a>
                  <p>{username}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <a href={website}>
                    <p>{website}</p>
                  </a>
              
                </li>
              </ul>
            )
          )}
      </>

 
  );
}




