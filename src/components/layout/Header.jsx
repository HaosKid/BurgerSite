// Import necessary libraries and components
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5"; 
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; 
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion"; 
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
        {
           // Animated logo 
        }
      
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      {
        // Navigation links
      }
      
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        {
             // Cart icon link
        }
       
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        {
            // Dropdown menu component
        }
        
        <DropdownMenu />
      </div>
    </nav>
  );
};

// Export the Header component
export default Header;
