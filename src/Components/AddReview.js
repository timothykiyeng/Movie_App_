import React from "react";
import image from '../Images/starwars.jpg'
import Navbar from './Navbar';
import '../Review.css';

// import { FaStar } from "react-icons/fa";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
    
// };

export default function AddReview() { 

// const [currentValue, setCurrentValue] = useState(0);
// const [hoverValue, setHoverValue] = useState(undefined);
// const stars = Array(5).fill(0)

// const handleClick = value => {
//     setCurrentValue(value)
//   }

// const handleMouseOver = newHoverValue => {
//     setHoverValue(newHoverValue)
//   };

// const handleMouseLeave = () => {
//     setHoverValue(undefined)
//   }
   

    return (
        
        <div>
            <Navbar />
            <div className="Container">
            <img src={image} />
            <div className="Moviedets">
            {/* <h2> Movie Review </h2> */}
            <h3>Title:  STAR WARS - THE LAST JEDI</h3>
            <h4>Description:</h4>
            <p>Concerned about how strong she is, Luke Skywalker guides Rey as she trains and develops her powers in hopes of assisting the Resistance in their fight against the First Order.</p>
            <h4>Length:</h4>
            <p>2hrs 54mins</p>
            <h4>Genre: </h4>
            <p>Sci-fiction</p>
            <h4>Cast: </h4>
            <p>Jevans Otieno, Daisy Ridley, Mark Hamill, John Boyega, Kelly Marie Tan, Oscar Isaac.</p>
            {/* <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        </div> */}
        <h2> Post Review </h2>
        <textarea
        placeholder="Tell us more about the movie?"
        style={styles.textarea}
      /><br/>
      <button
        style={styles.button}
      >
        post review
      </button>
      </div>
      </div>
      <table className="Table-list">
            <h2 >Reviews</h2>
            <tbody className="Table-body">
                <tr>
                    <th>
                        <h3>Viewer</h3>
                    </th>
                    <th>
                        <h3>Rating</h3>
                    </th>
                    <th>
                        <h3>Comment</h3>
                    </th>
                </tr>
                
            </tbody>
        </table>

        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceBetween"
      },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
      }}