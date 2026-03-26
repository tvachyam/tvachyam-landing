import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">Tvachyam</div>

      <a href="#signup">
        <button className="nav-btn">
          Join Founder's Club
        </button>
      </a>

    </nav>
  );
}

export default Navbar;