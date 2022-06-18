import React from 'react';
import { Link } from 'react-router-dom';
import { BlogData } from '../BlogData/BlogData';
import { Right, SearchBar, SearchBtn, RecentPost, RecentImg } from '../Style';

const RightSide = () => {
  return (
    <div>
      <Right>
        <h3>SEARCH</h3>
        <SearchBar type='text' placeholder='Search for posts' />
        <SearchBtn>SEARCH</SearchBtn>
        <h3>CATOGORIES</h3>
        <p>
          Pick a link list to show here in your under Blog sidebar Quick links
          link list. RECENT POST
        </p>
        <h3>RECENTS POSTS</h3>
        {BlogData.map((e) => {
          return (
            <Link to='/blogdetails'>
              <RecentPost
                key={e.id}
                onClick={() => {
                  // console.log(e.id)
                  localStorage.clear();
                  localStorage.setItem('blogData', JSON.stringify(e.id));
                }}>
                <RecentImg src={e.image1} alt='' />
                <p>{e.p1Title}</p>
              </RecentPost>
            </Link>
          );
        })}
      </Right>
    </div>
  );
};

export default RightSide;
