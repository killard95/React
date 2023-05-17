import { useState, useEffect } from "react";
import FormAdress from "./FormAdress";

export default function Display() {
  const [Placeholder, setPlaceholder] = useState("posts");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const adress = ["posts", "comments", "albums", "photos", "todos", "users"];
  const option = "?_limit=5";
  const [value, setValue] = useState();
  // const [limit, setLimit] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    // const limit = event.target.value
    setValue(value);
    // setLimit(limit);
    // console.log(limit)
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setLimit(limit);
  //     console.log(limit)
  //   };

  //   const opt = +"?_limit=" + limit;
  const API = "https://jsonplaceholder.typicode.com/" + value;

  // useEffect(
  //   () => {
  // Traitement des données (requetes fetch)
  fetch(API)
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
  if (value == "todos") {
    return (
      <>
        <form>
          <select placeholder="posts" onChange={handleChange}>
            {adress.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </form>
        {/* <input type="number" placeholder="25" value={limit} onChange={handleChange}/> */}
        {/* <button  onClick={handleSubmit}>Limit</button> */}
        {data &&
          data.map(({ id, title, completed }) => (
            <ul>
              <li key={id}>
                <h1>{id}</h1>
                <h3>{title}</h3>
                <p>{completed == true ? "fait" : "à faire"}</p>
              </li>
            </ul>
          ))}
      </>
    );
  }
  if (value == "users") {
    return (
      <>
        <form>
          <select placeholder="posts" onChange={handleChange}>
            {adress.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </form>
        {/* <input type="number" placeholder="25" value={limit} onChange={handleChange}/> */}
        {/* <button  onClick={handleSubmit}>Limit</button> */}
        {data &&
          data.map(
            ({
              id,
              name,
              email,
              username,
              phone,
              website,
              address,
              company,
            }) => (
              <ul>
                <li key={id}>
                  <h1>{id}</h1>
                  <h3>{name}</h3>
                  <p>{username}</p>
                  <p>{email}</p>
                  <p>
                    {address.street}</p>
                    <p>{address.suite}</p> <p>{address.city}</p> 
                    <p>
                    {address.zipcode}
                    </p>
                  <p>
                    {address.geo.lat}</p><p> {address.geo.lng}
                  </p>
                  <p>{phone}</p>
                  <a href={website}>
                    <p>{website}</p>
                  </a>
                  <p>{company.name}</p>
                  <p>{company.catchPhrase}</p>
                  <p>{company.bs}</p>
                </li>
              </ul>
            )
          )}
      </>
    );
  }
  return (
    <>
      <form>
        <select placeholder="posts" onChange={handleChange}>
          {adress.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </form>
      {/* <input type="number" placeholder="25" value={limit} onChange={handleChange}/> */}
      {/* <button  onClick={handleSubmit}>Limit</button> */}
      {data &&
        data.map(({ id, title, body, name, email, url, thumbnailUrl }) => (
          <ul>
            <li key={id}>
              <h1>{id}</h1>
              <h3>{title}</h3>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{body}</p>
              <a href={url}>
                <p>{url}</p>
              </a>
              <a href={thumbnailUrl}>
                <p>{thumbnailUrl}</p>
              </a>
            </li>
          </ul>
        ))}
    </>
  );
}
