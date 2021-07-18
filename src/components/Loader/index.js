import { useEffect, useRef, useState } from "react";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import "../../styles/loader.scss";

const getRandChar = () => {
  const LETTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (Math.random() > 0.5) {
    return String.fromCharCode(Math.floor(Math.random() * 28) + 65);
  } else {
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
  }
};

const Loader = () => {
  const [lines, setLines] = useState([]);
  const splitRef = useRef(null);

  useEffect(() => {
    // Splitting the lines into characters
    if (splitRef) {
      let split_res = Splitting({ by: "chars" });
      console.log(split_res);
      setLines(split_res);
    }
  }, [splitRef]);

  useEffect(() => {
    // CRYPTIC/DECODING TEXT EFFECT
    for (let text of lines) {
      window.setTimeout(() => {
        // let shows = document.querySelectorAll(".show");
        // shows.forEach((el) => el.classList.remove("show"));
        text.el.classList.add("show");
        for (let char of text.chars) {
          window.setTimeout(() => {
            let time = 0;
            for (let i = 0, n = Math.random() * 5; i < n; i++) {
              window.setTimeout(() => {
                char.innerText = getRandChar();
              }, i * 100);
              time += 100;
            }
            window.setTimeout(() => {
              char.innerHTML = "&nbsp;";
            }, time + 100);
          }, 5000 * Math.random() + 5000);
        }
      }, lines.indexOf(text) * 2000);
    }

    window.setTimeout(() => {
      const loader = document.querySelector(".loader")
      loader.classList.add("hide")
      window.setTimeout(() => {
        loader.style.display = "none"
      }, 2100)
    }, 13000)
  }, [lines]);

  return (
    <div className="loader">
      <p ref={splitRef} data-splitting="true" className="initText">
        Design is my <span className="highlight">PASSION</span>
      </p>
      <p ref={splitRef} data-splitting="true" className="initText">
        Coding is my <span className="highlight">ACTION</span>
      </p>
    </div>
  );
};

export default Loader;
