import React from "react";
import styled from "styled-components";
const Toggle = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ToggleBtn>
      <Topbtn onClick={scrollToTop}>TOP</Topbtn>
    </ToggleBtn>
  );
};

export default Toggle;

const Topbtn = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    background: rgba(0, 150, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      background: rgba(0, 150, 0, 1);
    }
  }
  @media ${(props) => props.theme.desktop} {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    background: rgba(0, 150, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      background: rgba(0, 150, 0, 1);
    }
  }
`;

const ToggleBtn = styled.div`
  @media ${(props) => props.theme.mobile} {
    position: fixed;
    left: 10px;
    bottom: 10px;
    display: block;
    z-index: 10;
  }
  @media ${(props) => props.theme.desktop} {
    position: fixed;
    left: 20px;
    bottom: 20px;
    display: none;
    z-index: 10;
  }
`;
