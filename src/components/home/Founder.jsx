// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion"; 
import me from "../../assets/skj.jpg";  

/**
 * Founder component displays the information about the founder of the Burger Shop.
 */
const Founder = () => {
  // Animation
  const options = {
    initial: { // Initial state of the animation
      x: "-100%",
      opacity: 0,
    },
    whileInView: { // Final state when the element is in view
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      {/* Animated div containing the founder's information */}
      <motion.div {...options}>
        {/* Founder's image */}
        <img src={me} alt="Founder" height={200} width={200} />

        <h3>Nelson</h3>

        {/* Founder's introduction */}
        <p>
          Hey, Everyone I am Nelson, the founder of Burger Shop.
          <br />
          Our aim is to create the most tasty burger on the planet.
        </p>
      </motion.div>
    </section>
  );
};

// Export the Founder component for use in other parts of the app
export default Founder;
