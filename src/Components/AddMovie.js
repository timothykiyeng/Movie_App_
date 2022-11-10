import React, {useState} from "react";

const initialValues = { image_url: "", name: "", rating: "", overview: "" };
function AddMovie ({ postMovies }){
    const [formData, setFormData] = useState(initialValues)

    function handleChange(event) {
        setFormData((formData) => ({
          ...formData,
          [event.target.name]: event.target.value,
        }));
      }


      function handleSubmit(event) {
        event.preventDefault();
        postMovies(formData);
        setFormData(initialValues);
      }

    return (
        <div className="ui segment">
          <form onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
              <input
              className="add-movie"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name of Movie"
                onChange={handleChange}
                required
              />
              <input
              className="add-movie"
                type="text"
                name="image_url"
                placeholder="Image"
                value={formData.image_url}
                onChange={handleChange}
                required
              />
              <input
              className="add-movie"
                type="text"
                name="overview"
                placeholder="Overview"
                value={formData.overview}
                onChange={handleChange}
                required
              />
              <input
              className="add-movie"
                type="number"
                name="rating"
                placeholder="Ratings"
                step="1"
                value={formData.rating}
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
