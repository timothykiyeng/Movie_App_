import React, {useState} from "react";

const initialValues = { image_url: "", name: "", rating: "", overview: "" };
function AddMovie ({ postMovies }){
    const [formData, setFormData] = useState(initialValues)

    return (
        <div className="ui segment">
          <form className="ui form">
            <div className="inline fields">
              <input
              className="add-movie"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name of Movie"
                required
              />
              <input
              className="add-movie"
                type="text"
                name="image_url"
                placeholder="Image"
                value={formData.image_url}
                required
              />
              <input
              className="add-movie"
                type="text"
                name="overview"
                placeholder="Overview"
                value={formData.overview}
                required
              />
              <input
              className="add-movie"
                type="number"
                name="rating"
                placeholder="Ratings"
                step="1"
                value={formData.rating}
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
