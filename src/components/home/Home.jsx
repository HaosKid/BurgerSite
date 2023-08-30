// Import necessary libraries and components
import React from "react";
import { motion } from "framer-motion"; 
import Founder from "./Founder"; 
import Menu from "./Menu"; 

/**
 * Home page
 */
const Home = () => {
    // Animation options using framer-motion
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
        <div>
            <section className="home">
                <div>
                    {/* Animated title of the shop */}
                    <motion.h1 {...options}>Burger Shop</motion.h1>

                    {/* Animated introductory paragraph */}
                    <motion.p {...options} transition={{ delay: 0.2 }}>
                        Give yourself a tasty burger.
                    </motion.p>
                </div>

                {/* Animated link that points to the menu section */}
                <motion.a 
                    href="#menu" 
                    initial={{
                        y: "-100%",
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.4 }}
                >
                    Explore Menu
                </motion.a>
            </section>

            {/* Menu component showcasing the available food items */}
            <Menu />

            {/* Founder component showcasing details about the founder */}
            <Founder />
        </div>
    );
};

// Export the Home component for use in other parts of the app
export default Home;
