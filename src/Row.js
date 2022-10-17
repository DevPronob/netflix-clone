import axios from 'axios';
import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './Row.css'
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] =useState([])
    const [trailerUrl,setTrailerUrl] =useState('')
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    useEffect(() =>{
        async function fetchData(){
            const request =await axios.get(fetchUrl)
            setMovies(request.data.results)
            return fetchData
        }
        fetchData()
    },[])
    const opts = {
        height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
      }
      const handleClick=(movie ) =>{
        if (trailerUrl) {
            setTrailerUrl('')
           
          } else {
            movieTrailer(movie?.name || '')
              .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
      
                setTrailerUrl(urlParams.get('v'))
                console.log(urlParams)
              })
              .catch(error => console.error(error.message))
          }
      }
      console.log(trailerUrl)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>

               {
                 movies.map(items =>{
                  return <>
                    <img onClick={() =>handleClick(items)} className={`row__poster ${isLargeRow && 'row__Large_poster'}`} src={`${posterBaseUrl}${isLargeRow?items.poster_path:items.backdrop_path}`} alt={items.name} />
                   </>
                })
               }

            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>
            }
        </div>
    );
};

export default Row;