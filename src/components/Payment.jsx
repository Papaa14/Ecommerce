import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "./axios";
import "./../styles/Payment.css";

function Payment({ userData }) {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(cartItemsData);
  }, []);

  const createOrder = async (data, actions) => {
    try {
        const productIdsAndQuantities = cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity
        }));
      
     const response = await axios.post('/checkout.php', {
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            address: userData.address,
            productIdsAndQuantities: productIdsAndQuantities
        }, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        )
        const totalAmount = response.data.totalAmount;

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: totalAmount,
                    },
                },
            ],
        });
    } catch (error) {
        console.error("Error calculating total amount:", error);
        return null;
    }
};




  
  return (
    <div className="full-block">
      <div className="paymentButtons">
        <PayPalScriptProvider options={{ clientId: "AT6GZrfq-IgOwXV9t8UATxBG9m9vESe6qfTOSV9-nXgshLYlMfByFWE8-QwtmxMtRTZJznISp-TL6jFv" }}>
          <PayPalButtons
            forceReRender={[userData]}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => {
              console.log("Payment approved:", data);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Payment;