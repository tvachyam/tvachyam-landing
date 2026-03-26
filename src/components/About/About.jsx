import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* TEXT */}
        <div className="about-text" data-aos="fade-right">

          <h2>About Tvachyam</h2>

          <p>
            Tvachyam was born from a simple belief —
            comfort should not be a luxury.
          </p>

          <p>
            In a world that moves fast, we wanted to create something that slows you down.
            Something that feels soft on your skin, light on your body, and calming to your mind.
          </p>

          <p>
            Crafted from breathable bamboo fabric,
            every piece is designed to bring you closer to comfort — naturally.
          </p>

        </div>

        {/* IMAGE */}
        <div className="about-image" data-aos="fade-left"></div>

      </div>

    </section>
  );
}

export default About;