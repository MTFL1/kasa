import React, { useState } from "react";
import PropTypes from "prop-types";
import "./caroussel.scss";
import arrowRight from "../../assets/images/arrowRight.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

function Carousel(props) {
  const pictures = props.pictures;
  const totalPictures = pictures.length;

  const [currentPicture, setCurrentPicture] = useState(0);

  const prev = () => {
    setCurrentPicture((currentPicture - 1 + totalPictures) % totalPictures);
  };

  const next = () => {
    setCurrentPicture((currentPicture + 1) % totalPictures);
  };
  return (
    <section className="slides">
      {pictures.map((picture, index) => (
        <div
          className={index === currentPicture ? "slides__container" : "slides__hidden"}
          key={index}
        >
          <img src={picture} alt="Carousel item" />
        </div>
      ))}

      {pictures.length > 1 && (
        <>
          <div className="slides__controller">
            <button onClick={prev}>
              <img src={arrowLeft} alt="Arrow to the left" />
            </button>
            <button onClick={next}>
              <img src={arrowRight} alt="Arrow to the right" />
            </button>
          </div>
          <div className="slides__counter">
            {currentPicture + 1}/{pictures.length}
          </div>
        </>
      )}
    </section>
  );
      }

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
