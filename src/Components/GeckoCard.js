import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const GeckoCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/gecko/${item.id}`);
  };
  return (
    <Geckocard onClick={showDetail}>
      <GeckoCardImg src={item?.img} alt="imginfo" />

      <TextInfo>
        {" "}
        <Span>Name:</Span> {item?.name}
      </TextInfo>
      <TextInfo>
        <Span>Morph: </Span> {item?.morph}
      </TextInfo>
      <TextInfo>
        {" "}
        <Span>Gender:</Span> {item?.gender}
      </TextInfo>
      <TextInfo>
        {" "}
        <Span>Birth : </Span> {item?.birth}
      </TextInfo>
    </Geckocard>
  );
};

export default GeckoCard;

const Geckocard = styled.div`
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 40px;
    margin-top: 80px;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
    box-shadow: 0px 0px 6px #999;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.desktop} {
    margin-bottom: 40px;
    margin-top: 60px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 6px #999;
    border-radius: 20px;
  }
`;
const GeckoCardImg = styled.img`
  width: 100%;
`;
const TextInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Span = styled.span`
  font-size: 1rem;
`;
// const ModalMenu = styled.div``;
// const ModalMenu = styled.div``;
// const ModalMenu = styled.div``;
// const ModalMenu = styled.div``;
// const ModalMenu = styled.div``;
// const ModalMenu = styled.div``;
