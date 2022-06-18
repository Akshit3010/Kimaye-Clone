import React, { useState } from "react";
import styles from "./styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Login } from "./Login/Login";
import { CartModel } from "./cartModel/CartModel";

const dropdowns = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 100px",
};

const NavbarPage = () => {
  const [login_cart, setlogin_cart] = useState("");
  // Function and Variable for Model open and close
  const [state, setState] = React.useState(false);
  const loginORcart = (who) => {
    setlogin_cart(who);
    setState(true)
  };
  
  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      {login_cart === "login" ? <Login setState={setState} /> : <CartModel setState={setState}/>}
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
        <NavLink onClick={()=>loginORcart("login")}>
          {" "}
          <i class="fa-solid fa-user"></i>
        </NavLink>
        <NavLink onClick={()=>loginORcart("cart")}>
          <i class="fa-solid fa-bag-shopping"></i>
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
