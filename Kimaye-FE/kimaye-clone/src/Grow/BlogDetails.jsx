import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlogData } from './BlogData/BlogData';
import RightSide from './Components/RightSide';
import { Bottom } from './Style';

const Image = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  margin-top: 1em;
  text-align: center;
`;
const Main = styled.div`
  margin: 1em 3em;
`;
const Desc = styled.p`
  text-align: justify;
`;
const Top = styled.p`
  color: white;
  font-size: 12px;
  padding: 3px;
  position: absolute;
  right: 60%;
  background-color: #98cb4c;
`;

const BlogDetails = () => {
  let id = JSON.parse(localStorage.getItem('blogData')) || '';
  console.log(id);
  let data = BlogData[id-1];
  useEffect(()=> {
  },[id])
  
  // console.log(data);
  return (
    <Bottom>
      <Main>
        <Link to='/grow'>
          <Top>Grow with Kimaye</Top>
        </Link>
        <Title>{data.p1Title}</Title>
        <Image src={data.image1} alt='' />
        <Desc>{data.p1}</Desc>
        <Title>{data.p2Title}</Title>
        <Image src={data.image2} alt='' />
        <Desc>{data.p2}</Desc>
        <Title>{data.p3Title}</Title>
        <Image src={data.image3} alt='' />
        <Desc>{data.p3}</Desc>
      </Main>
      <RightSide />
    </Bottom>
  );
};

export default BlogDetails;
