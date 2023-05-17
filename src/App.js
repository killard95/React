// import logo from './logo.svg';
// import { useState, useEffect } from "react";
import "./App.css";
// import FetchQuery from "./Components/FetchQuery";
// import Accueil from "./Components/Accueil";
// import FetchQuery from './FetchQuery';
// import Client from './Components/Client';
// import {Table} from './Components/Client';
// import {Football} from './Components/Football';
// import MyForm from './Components/MyForm';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Page1 from './Pages/Page1';
// import Page1 from './Components/Page1';
// import Details from "./Components/Details";

// import Page2 from './Pages/Page2';`
// import TodoList from './Pages/TodoList';
// import Home from './Home';
// import NotFound from './Pages/NotFound';
// import LessText from "./Components/LessText";
// import ListOfThingz from "./Components/ListOfThingz";
// import LoginForm from './Components/LoginForm';
// import ParentToChildren from './Components/ParentToChildren';
// import ParentToChildFunction from './Components/ParentToChildFunction';
// import ChildToParentObj from "./Components/ChildToParentObj";
// import ChildToParentFunction from './Components/ChildToParentFunction';
// import Component1 from './Components/PropDrilling';
// import SearchBar from './Components/SearchBar';
// import FilmQuery from "./Components/FilmQuery";
import AllFilmQuery from "./Components/AllFilmQuery";

// export default function App() {
  const App = () => {

      // const user = "El Zéro";

    return(
      <span>
        <AllFilmQuery />
        {/* <FilmQuery value={value} /> */}

        {/* <FilmQuery /> */}
        {/* <SearchBar /> */}
        {/* <Component1 user={user} /> */}
        {/* <ChildToParentFunction /> */}
        {/* <ChildToParentObj /> */}
        {/* <ParentToChildFunction /> */}
        {/* <ParentToChildren /> */}
        {/* <LoginForm /> */}
        {/* <ListOfThingz /> */}
      </span>
    )
  // const mytext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt hreet et dolore magna aliqua. Ut enim ad minim veniam, quo et quis nostrud exerit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporis."


  // return (
  //   <span>
  //     <LessText 
  //     text={mytext}
  //     maxLength={35}
  //     />
  //   </span>
  // )
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(
  //   () => {
  //     // Traitement des données (requetes fetch)
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     // limite à 8 le nombre de data récup
  //     // fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
  //     .then((response)=>{
  //     if(!response.ok){
  //       throw new Error('L\'Api ne répond pas !')
  //     }
  //     return response.json()
  //   })
  //     .then((actualData)=>{
  //       setData(actualData)
  //       setError(null)
  //       console.log(actualData)
  //     })
  //     .catch((err)=> {
  //       setError(err.message);
  //       console.log(err.message);
  //     })
  //     .finally(
  //       ()=>{
  //         setLoading(false);
  //       }
  //     )
  //   },
  //   // Tableau des dépendances éventuelles (qui déclenche l'effet)
  //   []
  // )
  // return(
  //   <>
  //   <h5>requete fetch vers API</h5>
  //   { loading && <div>loading...</div>}
  //   { error && <div>erreur : {error}</div> }
  //   { data && data.map(
  //     ({id,title,body}) => (
  //       <li key={id}>
  //         <h1>{id}</h1>
  //         <h3>{title}</h3>
  //         <p>{body}</p>
  //       </li>
  //   ) )}
  //   </>

  //   <div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<NotFound />} />
          // <Route path="/" element={<Home />} />
  //         <Route path="Page1" element={<Page1 />} />
  //         <Route path="Page2" element={<Page2 />} />
  //         <Route path="TodoList" element={<TodoList />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
  //   const Theader = ["FirstName", "LastName", "Camp"];

  //   const Tbody = [
  //     {
  //       id: "1",
  //       perso: ["Darth", "Vador", "Empire"]
  //     },
  //     {
  //       id: "2",
  //       perso: ["Han", "Solo", "Rebellion"]
  //     },
  //     {
  //       id: "3",
  //       perso: ["Luke", "SkyWalker", "Rebellion"]
  //     },
  //     {
  //       id: "4",
  //       perso: ["R2", "D2", "Rebellion"]
  //     }
  //   ]

  //   const Tclass = 'StarWarsTable' ;

  //   const Message = "Et c'est le shoot";

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Table Theader={Theader} Tbody={Tbody} Tclass={Tclass} />
  //       <Football msg={Message} but={true} />
  //       <MyForm />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     {/* <Client perso={MyName} /> */}
  //   </div>
  // return (
  //   <div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Accueil />} />
  //         <Route path="/Page1" element={<Page1 />} />
  //         <Route path="/Details" element={<Details />} />
  //       </Routes>
  //     </BrowserRouter>

      {/* <FetchQuery /> */}
    {/* </div> */}
  // );
}
export default App;
