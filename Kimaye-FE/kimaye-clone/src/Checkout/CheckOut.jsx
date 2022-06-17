import React from "react";

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
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Long = styled.input`
  width: 70%;
  height: 25px;
  border-radius: 7px;
  border: none;
  padding: 7px;
`;

const Short = styled.input`
width:30%;
height:25px
border-radius:7px;
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
  return (
    <Check>
      <Intro>
        <img
          style={{ width: 200 }}
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo.png?19431"
          alt=""
        ></img>
        <h4>
          <Link href="">Contact information</Link> {" >"}
          <Link href="">Shipping</Link> {">"} <Link href="">Payment</Link>{" "}
        </h4>
        <div>
          <Line>
            <div>
              <p>Contact information</p>
            </div>
            <div>
              <p>
                Already have an account? <Link href="">Log in</Link>
              </p>
            </div>
          </Line>
          <Long name="email" type="email" placeholder="Email" required />
          <br />
          <input type="checkbox"></input>
          <label>Get order notification and delivery updates</label>
        </div>
        <Shiping>
          <form>
            <h4>Shipping address</h4>
            <Long
              name="country"
              type="text"
              placeholder="COUNTRY/REGION"
              required
            />
            <br /> <br />
            <Short
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <Short
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
            <br /> <br />
            <Long name="address" type="text" placeholder="Address" required />
            <br /> <br />
            <Long
              name="apartment"
              type="text"
              placeholder="Apartment,Suite,etc(optional)"
              required
            />
            <br /> <br />
            <Short name="city" type="text" placeholder="City" required />
            <Short name="State" type="text" placeholder="State" required />
            <Short name="zip" type="text" placeholder="Pin Code" />
            <br /> <br />
            <Long
              name="Number"
              type="number"
              placeholder="Mobile number for order and delivery update(optional)"
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
                padding: 14,
                width: 170,
                borderRadius: 10,
                border: "none",
              }}
              type="submit"
              placeholder="Continue to Shipping"
            >
              Continue to Shipping
            </button>
          </form>
        </Shiping>
      </Intro>
      <Total>
        <form>
          <hr />
          <div style={{ display: "flex", padding: 10 }}>
            <Long
              name="discount"
              type="text"
              placeholder="Gift card or Discount code"
            ></Long>
            <button
              style={{
                color: "gray",
                backgroundColor: "lightgray",
                padding: 10,
                width: 70,
                borderRadius: 7,
                border: "none",
              }}
              type="submit"
              placeholder="Apply"
            >
              Apply
            </button>
          </div>
          <hr />
          <div>
            <h5>Subtotal</h5>
            <h5>Shipping</h5>
          </div>
          <hr />
          <h4>Toatal</h4>
        </form>
      </Total>
    </Check>
  );
};

export default Checkout;
