import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './requests';
import './Row.css'
const Banner = () => {
    const [movies,setMovies] =useState([])
    useEffect(() =>{
        async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginals)
            const num =Math.floor(Math.random() *request.data.results?.length-1)
            console.log(num)
            setMovies(request.data.results[num])
            return fetchData
        }
        fetchData()
    },[])
    // movies
    console.log(movies)
    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + '...' : str
    return (
        <div>
            <header style={
                {
                    backgroundSize:"cover",
                    backgroundImage: `url(${posterBaseUrl}${movies?.backdrop_path})`,
                    backgroundPosition: 'center center',
                }
            } className='banner'>
               <div className='banner-contants'>
                <h1 className='banner_title'>{movies.title ||movies.name || movies.orginal_name}</h1>
                <div className='banner_buttons'>
                <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
                </div>
                <h1 className='movie_decription'>
                    {truncate(movies.overview)}
                </h1>
               </div>
               <div className='banner--fadeBottom'></div>
            </header>
        </div>
    );
};

export default Banner;