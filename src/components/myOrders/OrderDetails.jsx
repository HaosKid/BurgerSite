import React from "react";

/**
 * OrderDetails Component
 * 
 * This component renders the details of an order including shipping, contact, 
 * payment, and ordered items information.
 */
const OrderDetails = () => { 
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        {/* Shipping Details */}
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h1>Contact</h1>
          <p><b>Name</b>{"Stuart"}</p>
          <p><b>Phone</b>{2131232123}</p>
        </div>

        {/* Order Status */}
        <div>
          <h1>Status</h1>
          <p><b>Order Status</b>{"Processing"}</p>
          <p><b>Placed At</b>{"23-02-2002"}</p>
          <p><b>Delivered At</b>{"23-02-2003"}</p>
        </div>

        {/* Payment Details */}
        <div>
          <h1>Payment</h1>
          <p><b>Payment Method</b>{"COD"}</p>
          <p><b>Payment Reference</b>#{"asdasdsadsad"}</p>
          <p><b>Paid At</b>{"23-02-2003"}</p>
        </div>

        {/* Amount Details */}
        <div>
          <h1>Amount</h1>
          <p><b>Items Total</b>€{2132}</p>
          <p><b>Shipping Charges</b>€{200}</p>
          <p><b>Tax</b>€{232}</p>
          <p><b>Total Amount</b>€{232 + 200 + 2132}</p>
        </div>

        {/* List of Ordered Items */}
        <article>
          <h1>Ordered Items</h1>

          {/* Item 1 */}
          <div>
            <h4>Cheese Burger</h4>
            <div><span>{12}</span> x <span>{232}</span></div>
          </div>

          {/* Item 2 */}
          <div>
            <h4>Veg Cheese Burger</h4>
            <div><span>{10}</span> x <span>{500}</span></div>
          </div>

          {/* Item 3 */}
          <div>
            <h4>Burger Fries</h4>
            <div><span>{10}</span> x <span>{1800}</span></div>
          </div>

          {/* Sub Total */}
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>€{2132}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
