import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

export default function AllFilmQuery(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const [results, setResults] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");

    const API = `https://www.omdbapi.com/?s=${value}&type=movie&apikey=ee03101e`;
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("L'Api ne répond pas !");
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.Search);
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

      {data &&
        data.map(({ Title, imdbID }) => (
          <div className="Film" key={imdbID}>
            <FilmCard titre={imdbID} />
          </div>
        ))}
    </>
  );
}
