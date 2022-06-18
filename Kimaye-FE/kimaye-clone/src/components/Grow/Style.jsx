import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
`;

export const Mid = styled.div`
  text-align: center;
  padding: 1em;
  background-color: #437111;
`;

export const Bottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const Blog = styled.div`
  margin: 1em;
`;

export const Left = styled.div`
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const Right = styled.div`
  padding: 5%;
`;

export const BlogImage = styled.img`
  width: 90%;
  height: 200px;
  border-radius: 1em;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.9s ease;
    cursor: pointer;
  }
`;
export const Desc = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

export const RecentPost = styled.div`
  display: flex;
  margin: 1em 1em 1em 0;
  &:hover {
    color:#98cb4c;
    transform: scale(1.02);
    transition: transform 0.2s ease;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: black;
  text-decoration: none;
  &:hover {
    color: #98cb4c;
  }
`;

export const RecentImg = styled.img`
  width: 100px;
  height: 70px;
  margin-right: 1em;
`;

export const SearchBar = styled.input`
  padding: 10px;
`;

export const SearchBtn = styled.button`
  padding: 12px;
  background-color: #98cb4c;
  border: none;
`;
