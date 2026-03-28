import "./Founders.css";

const founders = [
  {
    name: "Vishnu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    desc: "Postdoc engineer who loves data, but loves Indian culture more. Keeps the brand thoughtful.",
  },
  {
    name: "Meghal",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
    desc: "Engineer on paper, entrepreneur in reality, martial artist for fun. Builds things fast, sometimes too fast.",
  },
  {
    name: "Adhi",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
    desc: "Doctor by day, business brain by night. Keeps things grounded (and healthy).",
  },
  {
    name: "Gopika",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    desc: "Engineer + developer. Turns all our messy ideas into something that actually looks good.",
  },
];

function Founders() {
  return (
    <section className="founders">
      <div className="founders-container">

        <h2 className="founders-title">The Founders</h2>

        <p className="founders-subtitle">
          A very balanced mix of logic, chaos, and “let’s just do it.”
        </p>

        <div className="founders-grid">
          {founders.map((item, index) => (
            <div className="founder-card" key={index}>

              <div className="image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>

              <h3>{item.name}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>

        {/* <div className="founders-footer">
          <h4>TVACHYAM</h4>
          <p>Her confidence is quiet. Not loud.</p>
        </div> */}

      </div>
    </section>
  );
}

export default Founders;