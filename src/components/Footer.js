import React from "react";
import { FaEnvelope, FaXTwitter, FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram, FaWhatsapp} from "react-icons/fa6"; // Import icons
const Footer = () => {
  return (
      <footer className="footer-container">
        <p className="community-text">Join Our Community</p>
        <div className="social-icons">
          <a href="mailto:chidambaramchimbu07@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="icon" /></a>
          <a href="https://www.facebook.com/share/aXFzouEqmaL6oif4/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
          <a href="https://www.instagram.com/satechstudios" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
          <a href="https://www.linkedin.com/in/chidambarams/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
          <a href="https://youtube.com/@satechstudios" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon" /></a>
          <a href="https://t.me/SAtechstudios" target="_blank" rel="noopener noreferrer"><FaTelegram className="icon" /></a>
          <a href="https://wa.me/7904210709" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon" /></a>
          <a href="https://x.com/Satechstudios?t=w_vodu5TGP5CWeuR-8JCMw&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className="icon" /></a>
          <a href="https://www.behance.net/satechstudios" target="_blank" rel="noopener noreferrer"><FaBehance className="icon" /></a>
        </div>
        <hr className="divider" />
        <p className="copyright">© 2025 SATech Studios. All Rights Reserved.</p>
      </footer>
    );
  };
export default Footer;
