import React, { useState } from 'react';
import moviesData from './datas/moviesData';

const MovieList=({addMovie})=> {

    
    return (
        
        <div className="movie-list">
            {
            moviesData.map((movie) =>{
                return (
                <div>
                    <h1 onClick={()=>addMovie(movie)}>{movie.title}</h1>
                    <img src={movie.poster} alt="" width={"250px"} height={"250px"}  onClick={()=>addMovie(movie)}/>
                </div>
                )
            })
            }
    </div>
    )
}

export default MovieList