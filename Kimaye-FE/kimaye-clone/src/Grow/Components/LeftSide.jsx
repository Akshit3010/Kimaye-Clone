import React from 'react';
import { Link } from 'react-router-dom';
import { BlogData } from '../BlogData/BlogData';
import { Left, Blog, BlogImage, Desc, Title } from '../Style';

const LeftSide = () => {
  return (
    <Left>
      {BlogData.map((e) => {
        return (
          <Blog key={e.id}>
            {e.image1 ? (
              <Link to='/blogdetails'>
                <BlogImage src={e.image1} alt='' />
              </Link>
            ) : (
              ''
            )}
            {e.p1Title ? (
              <Link to='/blogdetails'>
                <Title>{e.p1Title}</Title>
              </Link>
            ) : (
              ''
            )}
            {e.p1 ? <Desc>{e.p1}</Desc> : ''}
          </Blog>
        );
      })}
    </Left>
  );
};

export default LeftSide;
