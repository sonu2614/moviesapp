// import { useState } from "react"
//import moviesData from "./Components/datas/moviesData";


// const OldApp =()=> {
//   const [selectedMovie, setSelectedMovie]=useState("")

//   return (
//     <div>
//       <h1 style={{color:"black",fontSize:"100px",textAlign:"center"}}>Movies</h1>
//       <div className="movie-list">
//       {
//         moviesData.map((movie) =>{
//           return (
//             <div>
//               <h1 onClick={()=>setSelectedMovie(movie)}>{movie.title}</h1>
//               <img src={movie.poster} alt="" width={"250px"} height={"250px"}  onClick={()=>setSelectedMovie(movie)}/>
//           </div>
//           )
//         })
        
//       }
//
    //   </div>
    //   {selectedMovie && (
    //     <div className="movie-display" >
    //     <h1>{selectedMovie.year}</h1>
    //     <h1>{selectedMovie.genre}</h1>
    //     <h1>{selectedMovie.plot}</h1>
        
    //   </div>
//       )}
//     </div>
    
//   )
// }

// export default OldApp;