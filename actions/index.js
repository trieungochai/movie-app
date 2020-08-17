import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const MOVIE_DATA = [];

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

const CATEGORY_DATA = [
  {id: 'c-0', genre:'all'},
  {id: 'c-1', genre:'Animation'},
  {id: 'c-2', genre:'Action'},
  {id: 'c-3', genre:'Adventure'},
  {id: 'c-5', genre:'Biography'},
  {id: 'c-6', genre:'Comedy'},
  {id: 'c-7', genre:'Crime'},
  {id: 'c-8', genre:'Documentary'},
  {id: 'c-9', genre:'Historical'},
  {id: 'c-10', genre:'Fantasy'},
  {id: 'c-11', genre:'Horror'},
  {id: 'c-12', genre:'Musical'},
  {id: 'c-13', genre:'Mystery'},
  {id: 'c-14', genre:'Romance'},
  {id: 'c-16', genre:'Sci-Fi'},
  {id: 'c-17', genre:'Thriller'},
  {id: 'c-18', genre:'War'},
  {id: 'c-19', genre:'Western'},
  {id: 'c-20', genre:'Drama'},
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      reject('Cannot fetch data')
    }, 50)
  })
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 5);
  return axios.post(`${BASE_URL}/api/v1/movies/`, movie).then(res => res.data);
};

// 43. Delete Movie
export const deleteMovie = (id) => {
 return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};

// 46. Final touches on Update movies functionality
export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data);
};

// 51. API Endpoints
export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data)
}