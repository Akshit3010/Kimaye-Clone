import React, { useEffect, useState } from "react";
import { CartH1, CartHeading, CartMain, Cartp } from "./Cart.styled";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const today = new Date().toISOString().substring(0, 10);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Empty, setIsEmpty] = useState(false);

  useEffect(() => {
    document.title = "Your Shopping Cart - Kimaye";
    getCartData();
  }, []);

  const getCartData = () => {
    setIsLoading(true);
    fetch("https://kimaye-backend.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.length === 0) {
          setIsEmpty(true);
        }
        setCartData(data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  const decrementQuantity = async (id, quantity) => {
    if (quantity === 1) {
      return;
    }
    try {
      let res = await fetch("https://kimaye-backend.herokuapp.com/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          quantity: quantity - 1,
        }),
      });
      await res.json();
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = async (id, quantity) => {
    if (quantity === 5) {
      return;
    }
    try {
      let res = await fetch("https://kimaye-backend.herokuapp.com/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          quantity: quantity + 1,
        }),
      });
      await res.json();
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const delete_item = async (id) => {
    try {
      let res = await fetch("https://kimaye-backend.herokuapp.com/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
        }),
      });
      await res.json();
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const total_price = cartData.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
    <>
      <CartHeading>
        <CartH1>CART</CartH1>
        <Cartp>
          <i className="fa-solid fa-house"></i> Home&nbsp; / &nbsp;Cart
        </Cartp>
      </CartHeading>

      {!Empty && (
        <CartMain>
          <div className="cart_main_div">
            <p className="cart_main_title title_1">Product</p>
            <p className="cart_main_title">Price</p>
            <p className="cart_main_title">Quantity</p>
            <p className="cart_main_title">Total</p>
          </div>
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : isError ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">Something went wrong</Alert>
            </Stack>
          ) : (
            cartData.map((el, index) => {
              const { _id, quantity } = el;
              return (
                <div key={index} className="cart_main_div">
                  <div
                    onClick={() => delete_item(_id)}
                    className="cart_main_delete"
                  >
                    x
                  </div>
                  <div>
                    <div className="cart_main_flex">
                      <img src={el.image} alt={el.title} />
                      <div>
                        <p>{el.title}</p>
                        <span>{el.category}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="cart_main_details">₹{el.price}</p>
                  </div>
                  <div>
                    <div className="cart_main_details">
                      <button onClick={() => decrementQuantity(_id, quantity)}>
                        -
                      </button>
                      <span>{el.quantity}</span>
                      <button onClick={() => incrementQuantity(_id, quantity)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="cart_main_details">
                      <b> ₹ {el.price * quantity}</b>
                    </p>
                  </div>
                </div>
              );
            })
          )}
          <div className="cart_main_delivery">
            <div>
              <p>Pick a Delivery date:</p>
              <input type="date" name="date" id="date" defaultValue={today} />
            </div>
            <div>
              <p>Choose a time:</p>
              <select name="time" id="time">
                <option value="11-12">11:00AM - 01:00PM</option>
                <option value="2-4">02:00PM - 04:00PM</option>
                <option value="4-8">04:00PM - 08:00PM</option>
              </select>
            </div>
            <p>Your current delivery location is Mumbai.</p>
          </div>
          <div className="cart_main_totals">
            <div className="cart_main_totals_left">
              <p>SPECIAL INSTRUCTIONS</p>
              <textarea
                name="instructions"
                id="instructions"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="cart_main_totals_right">
              <p>CART TOTALS</p>
              <div className="right_subtotals">
                <div>
                  <p>Subtotal:</p>
                  <p>₹ {total_price}</p>
                </div>
                <div>
                  <h2>TOTAL</h2>
                  <h2>₹ {total_price}</h2>
                </div>
              </div>
              <div className="animate_cart_totals">
                <p>100%</p>
              </div>
              <p className="shipping_cart">
                CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!
              </p>
              <button>Proceed to Checkout</button>
              <button>Continue Shopping</button>
            </div>
          </div>
        </CartMain>
      )}
      {Empty && <EmptyCart />}
    </>
  );
};

export default Cart;
