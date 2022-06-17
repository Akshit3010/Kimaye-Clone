import styled, { keyframes } from "styled-components";

const progress = keyframes`
0% {
    background-position: 0 0;
}

100% {
    background-position: -60px -60px;
}
`;

export const CartHeading = styled.div`
  background-color: #437111;
  margin: 0;
  color: #fff;
  font-family: sans-serif;
  padding: 0.4rem 0;
`;

export const CartH1 = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`;

export const Cartp = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > i {
    font-size: 12px;
    padding-right: 0.4rem;
  }
`;

export const CartMain = styled.section`
  position: relative;
  background-color: #ecece6;
  margin: 0 !important;
  padding-bottom: 2rem;
  font-family: sans-serif;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0449/5225/6667/files/jazz-bg-texture-min_1.jpg?v=1616673456);
    background-repeat: no-repeat;
    background-position: center top;
    background-color: transparent;
    background-size: 100% auto;
    background-repeat: repeat-y;
    top: 0;
    height: 100%;
    opacity: 0.25;
    z-index: 1;
  }
  & > .cart_empty {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > i {
      font-size: 148px;
      color: rgba(142, 142, 142, 0.2);
    }
    & > p {
      text-align: center;
      position: relative;
      font-size: 36px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700 !important;
      color: #1b1919;
      margin-bottom: 30px;
      z-index: 2;
    }
    & > div {
      text-align: center;
      margin-top: -25px;
      margin-bottom: 25px;
      line-height: 1.7;
      color: #8e8e8e;
    }

    & > button {
      display: inline-block;
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      border-radius: 0;
      border: 1px solid #ececec;
      transition: 0.25s ease-in-out;
      color: #3e3e3e;
      padding: 10px 20px;
      background-color: #8ebd47;
      color: #fff;
      position: relative;
      z-index: 2;
      cursor: pointer;
      font-size: 16px;
      padding: 12px 28px;
      &:hover {
        background-color: #98cb4c;
      }
    }
  }
  & > .cart_main_div {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 2;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    padding: 1rem 0;
    & > .cart_main_delete {
      position: absolute;
      top: 40%;
      left: 3%;
      cursor: pointer;
      padding: 0.2rem 0.5rem;
      border-radius: 50%;
      background-color: #111;
      color: #fff;
      z-index: 2;
      transition: transform 0.2s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
    & > .cart_main_title {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    & > .title_1 {
      padding: 0 6rem;
    }
    & > div > .cart_main_details {
      display: flex;
      align-items: center;
      height: 50%;
      justify-content: center;
      & > button {
        cursor: pointer;
        padding: 0.6rem 0.4rem;
        font-size: 1rem;
        outline: none;
        border: 1px solid #e0e0e0;
        color: #848484;
        background-color: #f9f9f9;
        &:hover {
          background-color: #ececec;
          border-color: #e0e0e0;
        }
      }
      & > span {
        background-color: #fff;
        padding: 0.6rem 0.8rem;
      }
    }
    & > div > .cart_main_flex {
      display: flex;
      & > img {
        width: 80px;
        margin-right: 1rem;
      }
      & > div > p {
        font-size: 14px;
        width: 180px;
        margin-bottom: 0.1rem;
      }
      & > div > span {
        font-size: 14px;
        color: #b2b2b2;
        text-align: left;
      }
    }
  }
  & > .cart_main_delivery {
    margin-top: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    text-align: center;
    & > p {
      color: #4c4c4c;
      font-size: 1.2rem;
      font-weight: 600;
    }
    & > div > input {
      width: 300px;
      height: 40px;
      font-size: 0.9rem;
      outline: none;
      font-family: sans-serif;
      border: none;
    }
    & > div > select {
      width: 300px;
      height: 40px;
      font-size: 0.9rem;
      outline: none;
      font-family: sans-serif;
      border: none;
    }
  }
  & > .cart_main_totals {
    background-color: #f8f8f8;
    display: flex;
    width: 74%;
    padding: 2rem;
    margin: auto;
    margin-top: 1rem;
    position: relative;
    z-index: 2;
    & > .cart_main_totals_left {
      width: 48%;
      margin-right: 1rem;
      & > p {
        font-size: 1.4rem;
        text-align: center;
        font-weight: 600;
      }
      & > textarea {
        width: 100%;
        resize: none;
        font-size: 1.2rem;
        outline: none;
        border: 1px solid #b2b2b2;
      }
    }
    & > .cart_main_totals_right {
      width: 48%;
      margin-left: 1rem;
      & > p {
        font-size: 1.4rem;
        text-align: center;
        font-weight: 600;
      }
      & > .right_subtotals {
        background-color: #fff;
        margin-bottom: 1.6rem;
        & > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }
        & > div:nth-child(1) {
          width: 94%;
          padding: 0;
          margin: auto;
          border-bottom: 1px solid #b2b2b2;
        }
      }
      & > .animate_cart_totals {
        margin-bottom: 5px;
        background-color: #ff4b4b;
        text-align: center;
        color: #fff;
        & > p {
          width: 100% !important;
          background-image: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.3) 0,
            rgba(255, 255, 255, 0.3) 25%,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.3) 75%,
            rgba(255, 255, 255, 0) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 30px 30px;
          transition: width 0.6s;
          animation: ${progress} 5s linear infinite;
        }
      }
      & > .shipping_cart {
        background: #ff4b4b;
        padding: 5px;
        font-size: 1rem;
        color: #fff !important;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 5px;
      }
      & > button {
        background: #98cb4c;
        height: 50px;
        width: 100%;
        border: none;
        display: flex;
        margin-bottom: 10px;
        margin-top: 10px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: white;
        text-transform: uppercase;
        font-family: PT Sans, Arial, Helvetica, sans-serif;
        cursor: pointer;
      }
    }
  }
`;
