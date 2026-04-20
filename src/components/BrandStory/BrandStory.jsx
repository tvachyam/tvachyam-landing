// 🔥 UPDATED BrandStory.js
import "./BrandStory.css";

function BrandStory() {
  return (
    <section className="brand-story">

      <div className="story-container">

        {/* NEW: image side */}
        <div className="story-image" data-aos="fade-right">
          <img
            src="/brand_story.png"
            alt="Tvachyam" />
        </div>

        {/* NEW: text side */}
        <div className="story-text" data-aos="fade-left">
          <h2>Your skin deserves better</h2>

          <p>
            Tvachyam was created with a simple belief —
            clothing should care for your skin as much as it comforts your mind.
          </p>

          <p>
            Crafted from breathable bamboo fabric,
            every piece is designed to feel soft, light and naturally calming.
          </p>
        </div>

      </div>

    </section>
  );
}

export default BrandStory;