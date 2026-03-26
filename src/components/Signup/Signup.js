import { useState } from "react";
import "./Signup.css";

function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     // 🔥 REPLACE THIS URL
  //     const formUrl = "https://docs.google.com/forms/d/e/FORM_ID/formResponse";

  //     const data = new FormData();

  //     // 🔥 REPLACE entry IDs
  //     data.append("entry.2108820299", form.name);
  //     data.append("entry.1731099886", form.email);
  //     data.append("entry.1655416469", form.phone);
  // // https://docs.google.com/forms/d/e/1FAIpQLSetCmneNaBHTl4RxRCjQIEC8pCytnJLGe0RIMhUlE5Izhosig/formResponse?usp=pp_url&
  // // entry.2108820299=test&entry.1731099886=test@gmail.com&entry.1655416469=9999999999

  //     try {
  //       await fetch(formUrl, {
  //         method: "POST",
  //         mode: "no-cors", // IMPORTANT
  //         body: data
  //       });

  //       setSubmitted(true);

  //     } catch (error) {
  //       console.error("Error submitting form", error);
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSetCmneNaBHTl4RxRCjQIEC8pCytnJLGe0RIMhUlE5Izhosig/formResponse";

    // ✅ Switch to URLSearchParams to force the correct encoding
    const data = new URLSearchParams();
    data.append("entry.392624779", form.name);
    data.append("entry.1500482799", form.email);
    data.append("entry.1269922463", form.phone);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data.toString() // ✅ Convert the data to a string
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
    }
};  
  return (

    <section className="signup" id="signup">

      <div className="signup-card">

        <h2>Become part of the beginning</h2>

        <p className="subtext">
          An invitation to experience comfort before the world does.
        </p>

        {submitted ? (
          <p className="success">
            You're on the list 🌿
          </p>
        ) : (
          <form onSubmit={handleSubmit}>

            <input
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />

            <button className="submit-btn">
              Join Founder's Club
            </button>

          </form>
        )}

      </div>

    </section>

  );
}

export default Signup;


// https://docs.google.com/forms/d/e/1FAIpQLSetCmneNaBHTl4RxRCjQIEC8pCytnJLGe0RIMhUlE5Izhosig/formResponse?usp=pp_url&entry.2108820299=test&entry.1731099886=test@gmail.com&entry.1655416469=9999999999