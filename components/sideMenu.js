import {useRouter} from 'next/router';
import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions';

// Containment
const SideMenu = (props) => {
  const {categories} = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // Close modal after create
      modal.closeModal();
      router.push('/');
    })
  };

  return (
    <div>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map(category => (
            <a
              onClick={() => props.changeCategory(category.genre)}
              key={category.id}
              href='#'
              className={`list-group-item ${props.activeCategory === category.genre ? 'active' : ''}`}>{category.genre}</a>
        ))}
      </div>
    </div>
  )
}

export default SideMenu;