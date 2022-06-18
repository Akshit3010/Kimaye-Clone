import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addTocart } from "../../redux/categoryRedux/categoryAction";

const a = {
  category: "All fruits",
  description:
    "Dasheri mangoes are long and oval shaped, with light green to yellow-green skin and turn golden yellow on ripening. Dasheri mangoes have a light yellow colored flesh with a medium-sized stone. This Mango variety is known for its very sweet and aromatic flavor.",
  image:
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Dasheri_360x.jpg?v=1623855977",
  origin: "India",
  price: 209,
  quantity: 1,
  title: "Kimaye Dasheri Mangoes (Pack of 3,6 &12)",
  __v: 0,
  _id: "62a9a1e03ed00779addebdfa",
};
const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 5em;
`;
const ImageDiv = styled.div`
  overflow: hidden;
  border-radius: 30px;
`;
const Image = styled.img`
  transition: all 0.5s ease-in-out;
  border-radius: 30px;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;
const Title = styled.p`
  margin-top: 0;
  font-size: 35px;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 20px;
`;
const Price = styled.p`
  font-size: 40px;
  color: #98cb4c;
`;
const Button = styled.button`
  padding: 1em;
`;
const AddButton = styled.button`
  margin-left: 2em;
  padding: 1em;
  border-radius: 50px;
  border: solid grey 1px;
`;
const Span = styled.span`
  padding: 1em;
`;
const KG = styled.span`
  padding: 1em;
  font-size: 16px;
  color: grey;
`;
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(a.quantity);
  const [product, setproduct] = useState({});
  const { _id } = useParams();
  const { categoryData } = useSelector((state) => state.AllProductReducer);
  const dispatch=useDispatch()
  /*
      let Data;
    const getData = async () => {
          fetch('https://kimaye-backend.herokuapp.com/allfruits')
                .then((response) => response.json())
                .then((json) => setData([json]));
      try {
        let res = await fetch('https://kimaye-backend.herokuapp.com/allfruits');
        let Data = await res.json();
        //   console.log(Data);
        setData(Data);
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getData();
    }, []);

    console.log(data);
    */

  useEffect(() => {
    console.log(_id);
    const data = categoryData.filter((elem) => elem._id == _id);
    console.log(data[0]);
    setproduct(data[0]);
  }, []);
  const handleInc=()=>{
    setQuantity(quantity + 1)
  };
  const handleDec=()=>{
    if (quantity > 1) setQuantity(quantity - 1);
  }
  const handleCart=()=>{
    dispatch(addTocart(product));
  }
  return (
    <div>
      <Main>
        <ImageDiv>
          <Image src={product.image} alt="" />
        </ImageDiv>
        <div style={{ textAlign: "left", marginLeft: "20px" }}>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Desc>Origin : {product.origin}</Desc>
          <Price>
            ₹{product.price} <KG>one KG</KG>
          </Price>
          <Button
            onClick={handleDec}
          >
            -
          </Button>{" "}
          <Span>{quantity}</Span>{" "}
          <Button onClick={handleInc}>+</Button>{" "}
          <AddButton onClick={handleCart}>Add to Cart</AddButton>
        </div>
      </Main>
    </div>
  );
};
export default ProductDetails;
