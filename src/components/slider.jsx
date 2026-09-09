import React, { useState, useContext } from "react";
import { getStyles } from "../theme/HomeStyle";
import { ThemeContext } from "../theme/themecontext";

const SliderCard = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const theme = useContext(ThemeContext);

  const styles = getStyles(theme);

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div style={styles.card}>

      <button
        style={styles.arrowLeft}
        onClick={prevSlide}
      >
        &lt;
      </button>

      <div style={styles.sliderContent}>
        <h2 style={styles.sliderHeading}>
          {slides[index].title}
        </h2>

        <p style={styles.sliderParagraph}>
          {slides[index].desc}
        </p>
      </div>

      <button
        style={styles.arrowRight}
        onClick={nextSlide}
      >
        &gt;
      </button>

      <div style={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={i === index ? styles.dotActive : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
};

export default SliderCard;