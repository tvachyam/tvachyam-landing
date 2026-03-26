import "./BambooBenefits.css";

function BambooBenefits() {
  return (
    <section className="benefits">

      <h2 className="section-title">
        Designed for comfort. Built for well-being.
      </h2>

      <div className="benefits-grid">

        {/* Large Feature */}
        <div className="benefit large">
          <div className="overlay"></div>
          <div className="content">
            <h3>Breathable</h3>
            <p>Keeps your body cool and comfortable throughout the day.</p>
          </div>
        </div>

        {/* Small 1 */}
        <div className="benefit">
          <div className="overlay"></div>
          <div className="content">
            <h3>Gentle on Skin</h3>
            <p>Soft, natural fabric that feels calm and soothing.</p>
          </div>
        </div>

        {/* Small 2 */}
        <div className="benefit">
          <div className="overlay"></div>
          <div className="content">
            <h3>Sustainable</h3>
            <p>A conscious fabric choice that respects nature.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default BambooBenefits;