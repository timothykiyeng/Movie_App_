import React, {useState} from "react";

const initialValues = { image_url: "", name: ""};
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
                placeholder="Image_url"
                value={formData.image_url}
                onChange={handleChange}
                required
              />
            </div>

            <button className="button" type="submit">
              Add To WatchList
            </button>
          </form>
        </div>
      );


}
export default AddMovie;
