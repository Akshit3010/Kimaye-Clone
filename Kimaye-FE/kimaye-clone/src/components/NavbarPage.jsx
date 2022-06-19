import React, { useEffect, useState } from "react";
import "./styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Login } from "./Login/Login";
import { CartModel } from "./cartModel/CartModel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/categoryRedux/categoryAction";

const dropdowns = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 100px",
};

const NavbarPage = () => {
  const [login_cart, setlogin_cart] = useState("");
  const { cartData } = useSelector((state) => state.AllProductReducer);
  const [cartCount, setCartcount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    getCartData(dispatch)
    // console.log(cartData);
    setCartcount(cartData.length);
  }, [cartData]);
  // Function and Variable for Model open and close
  const [state, setState] = React.useState(false);
  const [loggedIn, setLoggedin] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));
  const loginORcart = (who) => {
    setlogin_cart(who);
    setState(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setLoggedin(false);
  };

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      {login_cart === "login" ? (
        <Login setState={setState} />
      ) : (
        <CartModel setState={setState} />
      )}
    </Box>
  );
  // ----------end--------->
  return (
    <Navbar
      bg="myColor"
      variant="#EEEEEA"
      sticky="top"
      style={{ ...dropdowns }}
    >
      <Nav style={{ gap: "30px", color: "black" }}>
        <NavDropdown title="SHOP">
          <NavDropdown.Item href="/collections/allfruits">
            ALL FRUITS
          </NavDropdown.Item>
          <NavDropdown.Item href="/collections/cut-fruits">
            FRESH CUTS
          </NavDropdown.Item>
          <NavDropdown.Item href="/collections/combo-fruits">
            FRUIT COMBOS
          </NavDropdown.Item>
          <NavDropdown.Item href="/collections/gifts">
            GIFTS BY KIMAYE
          </NavDropdown.Item>
          <NavDropdown.Item href="/"> GRAPE FAMILY BY KIMAYE</NavDropdown.Item>
          <NavDropdown.Item href="/">RETURN AND REPLACEMENT</NavDropdown.Item>
          <NavDropdown.Item href="/">COMMUNITY BUYING</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="LEARN">
          <NavDropdown.Item href="/ourstory">OUR STORY</NavDropdown.Item>
          <NavDropdown.Item href="/whykimaye">WHY KIMAYE</NavDropdown.Item>
          <NavDropdown.Item href="/">TRACEABILITY</NavDropdown.Item>
          <NavDropdown.Item href="/">BEYOND FRUITS</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/grow">GROW</Nav.Link>
      </Nav>
      <Nav>
        <NavLink href="/">
          <img
            className="logo"
            href="/"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            alt=""
          />
        </NavLink>
      </Nav>

      <Nav style={{ display: "flex", gap: "30px" }}>
        <NavLink>
          {" "}
          <i class="fa-solid fa-location-dot"></i>
        </NavLink>
        <NavLink>
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>
        </NavLink>
        <NavLink
          onClick={() => {
            if (!userData) {
              loginORcart("login");
            } else if (userData.token) {
              setLoggedin(true);
            }
          }}
        >
          {" "}
          <i class="fa-solid fa-user"></i>
        </NavLink>
        {loggedIn && (
          <>
            <div className="loggedIn">
              <div className="close">
                {" "}
                <p onClick={() => setLoggedin(!loggedIn)}>X</p>{" "}
              </div>
              <p>
                {" "}
                <b>User:</b> {userData.firstName}{" "}
              </p>
              <p>
                {" "}
                <b>Email:</b> {userData.email}{" "}
              </p>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </>
        )}
        <NavLink onClick={() => loginORcart("cart")}>
          <i class="fa-solid fa-bag-shopping">
            <span style={{ backgroundColor: "white", padding:"5px",borderRadius:"50%" }}>
              {cartCount}
            </span>
          </i>
        </NavLink>
        {/* *********** */}
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          {list()}
        </Drawer>
        {/* ****************** */}
      </Nav>
    </Navbar>
  );
};

export default NavbarPage;
