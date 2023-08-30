import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg"; 
import { Link } from "react-router-dom";

const Profile = () => {
  // Animation 
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="profile">
      <main>
        {/* User's profile picture with motion effect */}
        <motion.img src={me} alt="User" {...options} />

        {/* User's name with motion effect and a delay */}
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Nelson
        </motion.h5>

        {/* Link to Orders with motion effect */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        {/* Logout button with motion effect and a delay */}
        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
