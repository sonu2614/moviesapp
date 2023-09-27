import React from 'react'

const MoviesDisplay=({movieToBeDisplay})=> {
    
    if(!movieToBeDisplay) return null
    
    return (
        <div>
    <div className="movie-display" >
        <h1 style={{textAlign:'center'}}>Movie Info</h1>
        <h1>{movieToBeDisplay.title}</h1>
        <p>{movieToBeDisplay.year}</p>
        <p>{movieToBeDisplay.genre}</p>
        <p>{movieToBeDisplay.plot}</p>
        </div>
        <div className="photo">
                    <img src={movieToBeDisplay.poster} alt="" width={"400px"} height={"500px"}/>
                </div>
        </div>
        
        )
    }
    
export default MoviesDisplay