// Import required libraries and components
import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

/**
 * A functional component representing an individual cart item.
 * It displays the item title, image, and controls to increment or decrement the quantity.
 */
const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>
        <div>
            {/* Button to reduce item quantity */}
            <button onClick={decrement}>-</button>
            {/* Readonly input displaying current item quantity */}
            <input type="number" readOnly value={value} />
            {/* Button to increase item quantity */}
            <button onClick={increment}>+</button>
        </div>
    </div>
);

/**
 * The main Cart component.
 * It displays a list of cart items and the total checkout amounts.
 */
const Cart = () => {
    // Placeholder function to increase the quantity of a cart item
    const increment = (item) => {}; 
    // Placeholder function to decrease the quantity of a cart item
    const decrement = (item) => {};

    return (
        <section className="cart">
            <main>
                {/* Individual Cart Items */}
                <CartItem
                    title={"Cheese Burger"}
                    img={burger1}
                    value={0}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"Veg Cheese Burger"}
                    img={burger2}
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"Cheese Burger with French Fries"}
                    img={burger3}
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />

                {/* Display checkout amounts */}
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>€{20}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>€{2 * 0.18}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>€{2}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>€{20 + (2 * 0.18) + 2}</p>
                    </div>
                    {/* Link to the shipping page */}
                    <Link to="/shipping">Checkout</Link>
                </article>
            </main>
        </section>
    );
};

// Export the Cart component for use in other parts of the app
export default Cart;
