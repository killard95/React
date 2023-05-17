import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

export default function AllFilmQuery(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const [results, setResults] = useState("");
  const [films, setFilms] = useState([]);
  const numbers = [];

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const API = `https://www.omdbapi.com/?s=${value}&apikey=ee03101e`;
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
        setResults(Math.floor(actualData.totalResults / 10) + 1);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  for (let i = 1; i <= results; i++) {
    numbers.push(i);
  }
  {
    numbers.map((number) =>
      fetch(
        `https://www.omdbapi.com/?s=${value}&page=${number}&apikey=ee03101e`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("L'Api ne répond pas !");
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
          setFilms(actualData.Search);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        })
    );

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Nom du film"
            autoFocus
          />
        </form>
        {films?.map(({ Title, imdbID }) => (
          <div className="Film" key={imdbID}>
            <h1>{Title}</h1>
            <FilmCard value={Title} />
          </div>
        ))}
      </>
    );
  }
}
