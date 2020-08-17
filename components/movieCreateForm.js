import {useState} from 'react';

const MovieCreateForm = (props) => {

  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  const defaultData = {
    title: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: '',
  };

  const formData = props.initialData ? {...props.initialData} : defaultData;

  const [form, setform] = useState(formData);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setform({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    // extract all our options from the list
    // const options = event.target.options;
    const {options} = event.target;
    const optionsLength = options.length;

    // hold the options that the user will select
    let values = [];
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: values.toString()
    });
  };

  const submitForm = () => {
    props.handleFormSubmit({...form});
  };

  return (
    <form>
      {/* {JSON.stringify(form)} */}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={form.title}
          name='title'
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Cowboy Bebop" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Plot Summary</label>
        <input
          onChange={handleChange}
          value={form.description}
          name='description'
          type="text"
          className="form-control"
          id="description"
          placeholder="The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners." />
      </div>
      <div className="form-group">
        <label htmlFor="description">Ratings</label>
        <input
          onChange={handleChange}
          value={form.rating}
          name='rating'
          type="number"
          max="10"
          min="0"
          className="form-control"
          id="rating"
          placeholder="8" />
        <small id="emailHelp" className="form-text text-muted">Max: 10, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Poster</label>
        <input
          onChange={handleChange}
          value={form.image}
          name='image'
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....." />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          name='cover'
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......" />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          value={form.longDesc}
          name='longDesc'
          className="form-control"
          id="longDesc"
          rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select 
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre">
          <option>Animation</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Biography</option>
          <option>Comedy</option>
          <option>Crime</option>
          <option>Documentary</option>
          <option>Historical</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Musical</option>
          <option>Mystery</option>
          <option>Romance</option>
          <option>Sci-Fi</option>
          <option>Thriller</option>
          <option>War</option>
          <option>Western</option>
        </select>
      </div>
      <button
        onClick={submitForm}
        type='button'
        className='btn btn-primary'>
          {props.submitButton || 'Create'}
      </button>
    </form>
  )
}

export default MovieCreateForm;