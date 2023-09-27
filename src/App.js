import { useState } from "react"
import MovieList from "./Components/MovieList";
import MoviesDisplay from "./Components/MoviesDisplay";

const App =()=> {

  const [selectedMovie,setSelectedMovie]=useState("")

  return (
    <div>
      <h1 style={{color:"black",fontSize:"100px",textAlign:"center"}}>Movies</h1>
      <MovieList  addMovie={setSelectedMovie}/>
      <MoviesDisplay movieToBeDisplay={selectedMovie}/>
     
    </div>
    
  )
}

export default App;
