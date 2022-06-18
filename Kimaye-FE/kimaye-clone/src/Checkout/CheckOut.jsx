import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components";

const Check = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  text-align: justify;
`;

const Intro = styled.div`
  width: 65%;
  margin: auto;
  background-color: lightgrey;
  padding: 10px;
`;

const Line = styled.div`
  display: flex;
  gap: 7px;
  justify-content: space-between;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Long = styled.input`
  width: 95%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 7px;
  margin-bottom: 10px;
`;

const Short = styled.input`
width:30%;
height:50px;
border-radius:7px;
border: none;

padding:7px`;

const Shiping = styled.div`
  padding: 10px;
`;
const Total = styled.div`
  background-color: #edece6;
  width: 55%;
  padding: 7px;
`;

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [formData, setFormdata] = useState({});

  useEffect(() => {
    setEmail(localStorage.getItem("emailId"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Check>
      <Intro>
        <img
          style={{ width: 200, margin: "30px 0px" }}
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo.png?19431"
          alt=""
        ></img>
        <p>
          <Link href="">Contact information</Link> {" >"}
          <Link href="">Shipping</Link> {">"} <Link href="">Payment</Link>{" "}
        </p>
        <div>
          <Line>
            <div>
              <p style={{fontSize:"25px"}}>Contact information</p>
            </div>
            <div>
              <p>
                Already have an account? <Link href="/">Log in</Link>
              </p>
            </div>
          </Line>
          <Long
            name="email"
            type="email"
            // value={email}
            placeholder="Email"
            required
          />
          <br />
          <input type="checkbox"></input>
          <label>Get order notification and delivery updates</label>
        </div>
        <Shiping>
          <form onSubmit={handleSubmit}>
            <h4 style={{marginTop:"40px",marginBottom:"30px"}}>Shipping address</h4>
            <Long
              name="country"
              type="text"
              placeholder="COUNTRY/REGION"
              required
              onChange={handleChange}
            />
            <br />
            <div style={{display:"flex",justifyContent:"space-between",width:"95%",marginBottom:"10px"}}>

            <Short
              style={{width:"49%"}}
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              onChange={handleChange}
            />
            <Short
            style={{width:"49%"}}
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
              onChange={handleChange}
            />
          </div>
            <Long
              name="address"
              type="text"
              placeholder="Address"
              required
              onChange={handleChange}
            />
            <br />
            <Long
              name="apartment"
              type="text"
              placeholder="Apartment,Suite,etc(optional)"
              required
              onChange={handleChange}
            />
            <br />
            <div style={{display:"flex",justifyContent:"space-between",width:"95%",marginBottom:"10px"}}>
            <Short
            style={{width:"33%"}}
              name="city"
              type="text"
              placeholder="City"
              required
              onChange={handleChange}
            />
            <Short
            style={{width:"31%"}}
              name="State"
              type="text"
              placeholder="State"
              required
              onChange={handleChange}
            />
            <Short
            style={{width:"33%"}}
              name="zip"
              type="text"
              placeholder="Pin Code"
              required
              onChange={handleChange}
            />
            </div>
            <Long
              name="Number"
              type="number"
              placeholder="Mobile number for order and delivery update"
              required
              onChange={handleChange}
            />
            <br />
            <input type="checkbox"></input>
            <label> Save this information for next time</label>
            <br />
            <br />
            <button
              style={{
                color: "white",
                backgroundColor: "#648c11",
                padding: 30,
                width: 220,
                borderRadius: 10,
                border: "none",
              }}
              type="submit"
            >
              Continue to Shipping
            </button>
            <Link href="/cart" style={{ color: "red", marginLeft: "30px" }}>
              Return to cart
            </Link>
          </form>
        </Shiping>
        <div style={{borderTop:"solid 2px gray", padding:"10px",display:"flex",marginTop:"50px",fontSize:"12px"}}>
          <Link style={{marginRight:"20px"}} href="">Return policy</Link>
          <Link style={{marginRight:"20px"}} href="">Shipping policy</Link>
          <Link style={{marginRight:"20px"}} href="">Privacy policy</Link>
          <Link style={{marginRight:"20px"}} href="">Terms of service</Link>
        </div>
      </Intro>
      <Total>
        <div>
          Map the cart data here
        </div>
          <hr />
          <div style={{ display: "flex",justifyContent:"space-between"}}>
            <Long
              name="discount"
              type="text"
              placeholder="Gift card or Discount code"
              style={{width:"80%"}}
            ></Long>
            <button
              style={{
                color: "gray",
                backgroundColor: "lightgray",
                width: 100,
                height:50,
                borderRadius: 7,
                border: "none",
              }}
            >
              Apply
            </button>
          </div>
          <hr />
          <div style={{ display: "flex",justifyContent:"space-between"}}>
            <h5>Subtotal</h5>
            <h5>320</h5>
          </div>
          <div style={{ display: "flex",justifyContent:"space-between"}}>
            <h5>Shipping</h5>
            <h5>free</h5>
          </div>
          <hr />
          <div style={{ display: "flex",justifyContent:"space-between"}}>
            <h3>Total</h3>
            <h3>INR ₹ 320.00</h3>
          </div>
      </Total>
    </Check>
  );
};

export default Checkout;
