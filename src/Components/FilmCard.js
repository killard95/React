import { useState, useEffect } from "react";

export default function FilmCard(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const filmArray = [];
  console.log(props.titre);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=${props.titre}&type=movie&apikey=ee03101e`
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
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  filmArray.push(data);
  return (
    <>
      {data &&
        filmArray.map(
          ({
            index,
            Title,
            Year,
            Released,
            Genre,
            Director,
            Writer,
            Actors,
            Plot,
            Language,
            Country,
            Poster,
            imdbRating,
            BoxOffice,
            Runtime,
          }) => (
            <div className="Film" key={index}>
              <h3>{Title}</h3>
              <img src={Poster} />
              <p>Année : {Year}</p>
              <p>durée : {Runtime}</p>
              <p>Genre : {Genre}</p>
              <p>Acteurs : {Actors}</p>
              <p>Résumé : {Plot}</p>
              <p>Note : {imdbRating}</p>
              <p>Budget : {BoxOffice}</p>
              <p>Réalisé : {Released}</p>
              <p>Directeur : {Director}</p>
              <p>Scénariste : {Writer}</p>
              <p>Langue : {Language}</p>
              <p>Pays : {Country}</p>
              <br />
            </div>
          )
        )}
    </>
  );
}
