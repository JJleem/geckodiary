import React from "react";
import "./WeightHeader.css";
import styled from "styled-components";
const WeightHeader = ({ title, leftChild, rightChild }) => {
  return (
    <Header>
      <HederLeft>{leftChild}</HederLeft>
      <HederTitle>{title}</HederTitle>
      <HederRight>{rightChild}</HederRight>
    </Header>
  );
};

export default WeightHeader;

const Header = styled.div`
  width: 90%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin: 0 auto;
`;
const HederLeft = styled.div`
  display: flex;
  width: 25%;
  justify-content: start;
`;
const HederRight = styled.div`
  display: flex;
  width: 25%;
  justify-content: end;
`;
const HederTitle = styled.div`
  display: flex;
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;
