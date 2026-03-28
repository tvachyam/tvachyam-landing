import "./Timeline.css";

const timelineData = [
//   { month: "Jan", stage: "Idea", completed: true },
//   { month: "Feb", stage: "Fabric Sourcing", completed: true },
//   { month: "Mar", stage: "Sampling", completed: false },
//   { month: "Apr", stage: "Launch", completed: false }

  
  {
    "month": "Jan",
    "stage": "The Idea",
    "description": "A belief that comfort should feel natural.",
    "completed": true
  },
  {
    "month": "Feb",
    "stage": "Research & Discovery",
    "description": "Understanding what your skin truly needs.",
    "completed": true
  },
  {
    "month": "Mar",
    "stage": "Material Selection",
    "description": "Choosing breathable bamboo for everyday comfort.",
    "completed": true
  },
  {
    "month": "Apr",
    "stage": "Crafting",
    "description": "Bringing thoughtful design to life.",
    "completed": false
  },
  {
    "month": "May",
    "stage": "Refinement",
    "description": "Perfecting every detail with care.",
    "completed": false
  },
  {
    "month": "Jun",
    "stage": "Launching Soon",
    "description": "Almost ready to be experienced.",
    "completed": false,
    "highlight": true
  }

];

function Timeline() {
  return (
    <section className="timeline">

      <h2 className="timeline-title">
        Our Journey So Far
      </h2>

      <div className="timeline-container">

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up">

            {/* Line */}
            {index !== timelineData.length - 1 && (
              <div className="line"></div>
            )}

            {/* Circle */}
            <div className={`circle ${item.completed ? "active" : ""}`}>
              {item.completed ? "✓" : ""}
            </div>

            {/* Text */}
            <p className="month">{item.month}</p>
            <p className="stage">{item.stage}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Timeline;