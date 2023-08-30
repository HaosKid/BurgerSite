// Import necessary libraries and components
import React from "react";
import { State } from "country-state-city";  
import Popup from "reactjs-popup";         
import { Link } from "react-router-dom";    

/**
 * Shipping component to gather the user's shipping details.
 */
const Shipping = () => {
    return (
        <section className="shipping">
            <main>
                <h1>Shipping Details</h1>
                <form>
                    <div>
                        <label>H.No.</label>
                        {/* Input field for house number */}
                        <input type="text" placeholder="Enter House No." />
                    </div>
                    <div>
                        <label>City</label>
                        {/* Input field for city */}
                        <input type="text" placeholder="Enter City" />
                    </div>
                    <div>
                        <label>Country</label>
                        {/* Dropdown for country (currently only showing India) */}
                        <select>
                            <option value="">India</option>
                        </select>
                    </div>
                    <div>
                        <label>State</label>
                        {/* Dropdown for states of the selected country */}
                        <select>
                            <option value="">State</option>
                            {State && 
                            State.getStatesOfCountry("IN").map((i) => (
                                <option value={i.isoCode} key={i.isoCode}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Pin Code</label>
                        {/* Input field for postal code */}
                        <input type="number" placeholder="Enter Pincode" />
                    </div>
                    <div>
                        <label>Phone No.</label>
                        {/* Input field for phone number */}
                        <input type="number" placeholder="Enter Phone No." />
                    </div>
                    {/* A Popup that triggers on clicking the "Confirm Order" link */}
                    <Popup
                        trigger={
                            <Link className="link" to="/myorders"> 
                                Confirm Order
                            </Link>
                        }
                    >
                        <div
                            style={{
                                color: "red",
                                transform: "translate(0%,-500%)",
                                backgroundColor: "#fff",
                                padding: "10px", 
                                borderRadius: "5px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            Order Successfully Placed!
                        </div>
                    </Popup>
                </form>
            </main>
        </section>
    );
};

// Export the Shipping component for use in other parts of the app
export default Shipping;
