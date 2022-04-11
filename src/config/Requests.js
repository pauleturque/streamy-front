const API_KEY = "a6e2f402113e8e3652c97be66984f87e";
// const base_url pexels = "563492ad6f91700001000001a84b5145f826479285b287c819c31183"

// import { createClient } from 'pexels';

// const client = createClient('YOUR_API_KEY');

// All requests made with the client will be authenticated

const BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default Requests;
