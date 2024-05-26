import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const WeightHeader = ({ title, leftChild, rightChild }) => {
  const { id } = useParams();
  return (
    <Header>
      <HederLeft>{leftChild}</HederLeft>
      <HederTitle>
        {title}{" "}
        {(id >= 0 && id <= 0 && "백룡") ||
          (id >= 1 && id <= 1 && "참깨") ||
          (id >= 2 && id <= 2 && "튼튼") ||
          (id >= 3 && id <= 3 && "뿌치") ||
          (id >= 4 && id <= 4 && "레오") ||
          (id >= 5 && id <= 5 && "티티") ||
          (id >= 6 && id <= 6 && "나나") ||
          (id >= 7 && id <= 7 && "송이") ||
          (id >= 8 && id <= 8 && "또치") ||
          (id >= 9 && id <= 9 && "달찌") ||
          (id >= 10 && id <= 10 && "마찌") ||
          (id >= 11 && id <= 11 && "춘향") ||
          (id >= 12 && id <= 12 && "무뮤") ||
          (id >= 13 && id <= 13 && "옹치") ||
          (id >= 14 && id <= 14 && "몽룡") ||
          (id >= 15 && id <= 15 && "요미") ||
          (id >= 16 && id <= 16 && "빈치")}
        의 일기
      </HederTitle>
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
