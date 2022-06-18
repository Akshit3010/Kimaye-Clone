import React, { useState } from 'react';
import styled from 'styled-components';

const a = {
  category: 'All fruits',
  description:
    'Dasheri mangoes are long and oval shaped, with light green to yellow-green skin and turn golden yellow on ripening. Dasheri mangoes have a light yellow colored flesh with a medium-sized stone. This Mango variety is known for its very sweet and aromatic flavor.',
  image:
    'https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Dasheri_360x.jpg?v=1623855977',
  origin: 'India',
  price: 209,
  quantity: 1,
  title: 'Kimaye Dasheri Mangoes (Pack of 3,6 &12)',
  __v: 0,
  _id: '62a9a1e03ed00779addebdfa',
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
  //   //   let Data;
  //   const getData = async () => {
  //     //     // fetch('https://kimaye-backend.herokuapp.com/allfruits')
  //     //     //       .then((response) => response.json())
  //     //     //       .then((json) => setData([json]));
  //     try {
  //       let res = await fetch('https://kimaye-backend.herokuapp.com/allfruits');
  //       let Data = await res.json();
  //       //   console.log(Data);
  //       setData(Data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   console.log(data);
  return (
    <div>
      <Main>
        <ImageDiv>
          <Image src={a.image} alt='' />
        </ImageDiv>
        <div>
          <Title>{a.title}</Title>
          <Desc>{a.description}</Desc>
          <Desc>Origin : {a.origin}</Desc>
          <Price>
            ₹{a.price} <KG>one KG</KG>
          </Price>
          <Button
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}>
            -
          </Button>{' '}
          <Span>{quantity}</Span>{' '}
          <Button onClick={() => setQuantity(quantity + 1)}>+</Button>{' '}
          <AddButton>Add to Cart</AddButton>
        </div>
      </Main>
    </div>
  );
};
export default ProductDetails;

// <div>
//   {data
//     ? data.map((e) => {
//         return (
//           <div key={e._id}>
//             <img src={e.image} alt=''/>
//           </div>
//         );
//       })
//     : ''}
// </div>
