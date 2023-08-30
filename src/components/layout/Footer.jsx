// Import required libraries and components
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        {
           // Information about Burger Shop 
        }
      
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @burgershop</strong>
      </div>
      {
        // Social media links
      }
      
      <aside>
        <h4>Follow Us</h4>
        {
            // Youtube link
        }
        
        <a href="https://www.youtube.com/channel/UCATXK2htIDlqe-2xf4KPUtA">
          <AiFillYoutube />
        </a>
        {
            // Instagram link
        }
        
        <a href="https://www.instagram.com/claudiupantazica/">
          <AiFillInstagram />
        </a>
        {
           // Github link 
        }
        
        <a  href="https://github.com/HaosKid">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

// Export the Footer component
export default Footer;
