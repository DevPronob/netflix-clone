const apiKey ="e19849a3f8f98e2892520439fbb7b5c9"

const requests = {
    fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&witg_network=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`,
  }
  
  export default requests