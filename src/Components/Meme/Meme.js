import React, { useState, useEffect } from "react";
import "./Meme.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
    setMeme({ topText: "", bottomText: "", randomImage: url });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  console.log(meme);

  return (
    <div className="form">
      <div className="inputs">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          id=""
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          id=""
          placeholder="Bottom text"
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={getRandomMeme}>
        Get a new meme image
      </button>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
