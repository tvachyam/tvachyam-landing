import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* TEXT */}
        <div className="about-text" data-aos="fade-right">

          <h2>About Tvachyam</h2>

          <p>
            We didn’t start TVACHYAM because the world needed another clothing brand.
            It didn’t.
          </p>

          <p>
            We started it because everything was either overpriced, uncomfortable, or trying too hard.
          </p>

          <p>
            So we made something simple:
            clothes that feel good, look effortless, and don’t scream for attention.
          </p>
          <p>
            Because confidence doesn’t have to be loud.
            It just has to be real.
          </p>
          <p>
            TVACHYAM is less about fashion, more about how you feel living in it.
          </p>

        </div>

        {/* IMAGE */}
        <div className="about-image"
          style={{
            backgroundImage: `url("/about.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          data-aos="fade-left"></div>

      </div>

    </section>
  );
}

export default About;