// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

/**
 * The About component displays information about the Burger Shop.
 */
const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>Burger Shop</h4>
                    {/* Description of the Burger Shop */}
                    <p>
                        This is Burger Shop. The place for the most tasty burgers on the 
                        entire earth.
                    </p>
                    <p>
                        Explore the various types of food and burgers. Click below to see the 
                        menu.
                    </p>
                    {/* Link to main page */}
                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                {/* Information about the founder */}
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            {/* Founder's picture */}
                            <img src={me} alt="Founder" />
                            <h3>Nelson</h3>
                        </div>
                        {/* Founder's description */}
                        <p>
                            I am Nelson, the founder of Burger Shop. Affiliated to 
                            Good Taste...
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};

// Export the About component for use in other parts of the app
export default About;
