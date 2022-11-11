import React, {useState} from "react";

const initialValues = { image_url: "", name: "", rating: "", overview: "" };
function AddMovie({ postMovies }) {
  const [formInput, setformInput] = useState(initialValues);

  function handleChange(event) {
    setformInput((formInput) => ({
      ...formInput,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postMovies(formInput);
    setformInput(initialValues);
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
          className="add-movie"
            type="text"
            name="name"
            value={formInput.name}
            placeholder="Name of Movie"
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="text"
            name="image_url"
            placeholder="Image"
            value={formInput.image_url}
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="text"
            name="overview"
            placeholder="Overview"
            value={formInput.overview}
            onChange={handleChange}
            required
          />
          <input
          className="add-movie"
            type="number"
            name="rating"
            placeholder="Ratings"
            step="1"
            value={formInput.rating}
            onChange={handleChange}
            required
          />
        </div>

        <button className="button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
