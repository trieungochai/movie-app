import React, { useState } from 'react';

import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import { getMovies, getCategories } from '../actions';

const Home = (props) => {
  const {images, categories, movies} = props;

  const [filter, setFilter] = useState('all');

  const changeCategory = category => {
    setFilter(category);
  };

  const filterMovies = movies => {
    if (filter === 'all') {
      return movies
    }

    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter)
    })
  };

  return (
    <div>
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
           <SideMenu
            changeCategory={changeCategory}
            activeCategory={filter}
            appName={"Movie DB"}
            categories={categories}
           />
          </div>
          <div className="col-lg-9">
            <Carousel images={images} />
            <div className="row">
              <MovieList movies={filterMovies(movies) || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      title: movie.title,
    }
  });

  return {movies, images, categories}
}

export default Home;