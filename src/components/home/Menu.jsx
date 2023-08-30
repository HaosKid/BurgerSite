// Import required libraries and components
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png"; 
import burger2 from "../../assets/burger2.png"; 
import burger3 from "../../assets/burger3.png";

// Menu component displaying various menu items
const Menu = () => {
    // Handler for adding items to cart
    const addToCartHandler = (itemNum) => {};

    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                {/* Cheese Burger menu card */}
                <MenuCard
                    itemNum={1} 
                    burgerSrc={burger1} 
                    price={3.99}
                    title="Cheese Burger" 
                    handler={addToCartHandler} 
                    delay={0.1}
                />

                {/* Veg Cheese Burger menu card */}
                <MenuCard
                    itemNum={2} 
                    burgerSrc={burger2} 
                    price={6.99}
                    title="Veg Cheese Burger" 
                    delay={0.5} 
                    handler={addToCartHandler}
                />

                {/* Cheese Burger with French Fries menu card */}
                <MenuCard
                    itemNum={3} 
                    burgerSrc={burger3} 
                    price={12.98}
                    title="Cheese Burger with French Fries" 
                    delay={0.8}
                    handler={addToCartHandler}
                />
            </div>
        </section>
    );
};

// Export Menu component
export default Menu;
