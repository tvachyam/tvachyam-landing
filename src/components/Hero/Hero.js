// 🔥 UPDATED Hero.js
import "./Hero.css";
function Hero() {
  return (
    <section className="hero"
    // style={{
    //   backgroundImage: `url(${heroImg})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
    >

      {/* NEW: overlay for luxury feel */}
      <div className="overlay"></div>

      <div className="hero-content" data-aos="fade-up">
        <h1>
          Designed for your skin. <br /> Crafted for your comfort.
        </h1>

        <p>
          Breathable bamboo restwear for a slower, softer way of living.
        </p>

        <a href="#signup">
          <button className="hero-btn">
            Join the Founder's Club
          </button>
        </a>
      </div>

    </section>
  );
}

export default Hero;