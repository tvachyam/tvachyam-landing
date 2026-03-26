import "./Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa"; // 🔥 NEW

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <p className="brand">Tvachyam</p>

        <p className="tagline">
          Comfort, quietly redefined.
        </p>

        {/* 🔥 NEW: Social Icons */}
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Tvachyam. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;