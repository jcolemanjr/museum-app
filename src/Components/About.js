import React, {useEffect} from "react";

function About() {
  useEffect(() => {
    const audio = document.querySelector(".secondAudio");
    audio.volume = 0.2;
  }, []);

  return (
    <div className="About">
      <h1 className="home">Home</h1>

      <audio
        className="secondAudio"
        src="/Assets/symphony2.mp3"
        type="audio/mpeg"
        autoPlay
      />

      <div className="about">
        <p className="introText">
          The Metropolitan Museum of Art presents over 5,000 years of art from
          around the world for everyone to experience and enjoy. The Museum
          lives in two iconic sites in New York City—The Met Fifth Avenue and
          The Met Cloisters. Millions of people also take part in The Met
          experience online.
        </p>
        <iframe
          className="bkgrnd-image"
          title="vimeo-player"
          src="https://player.vimeo.com/video/852765001?speed=0&pip=0&loop=1&background=1&app_id=122963"
          width="640"
          height="360"
          frameborder="0"
        />

        <p className="introText">
          Since its founding in 1870, The Met has always aspired to be more than
          a treasury of rare and beautiful objects. Every day, art comes alive
          in the Museum's galleries and through its exhibitions and events,
          revealing new ideas and unexpected connections across time and across
          cultures.
        </p>
      </div>
    </div>
  );
}

export default About;
