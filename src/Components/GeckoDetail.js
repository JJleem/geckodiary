import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Spinner, Carousel } from "react-bootstrap";
import GeckoWeight from "./GeckoWeight";
import { setPageTitle } from "./util";
import styled from "styled-components";

const GeckoDetail = () => {
  const [gecko, setGecko] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getGeckoDetail = async () => {
    const url = `https://my-json-server.typicode.com/JJleem/geckodiary/crestedgecko/${id}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setGecko(data);
  };
  useEffect(() => {
    setPageTitle(`
    ${
      (id >= 0 && id <= 0 && "백룡") ||
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
      (id >= 16 && id <= 16 && "빈치")
    } 
    의 기록`);
  }, []);

  useEffect(() => {
    getGeckoDetail();
  }, []);

  if (loading || gecko === null) {
    return (
      <SpinnerStyl>
        <Spinner className="Spinner" animation="border" variant="success" />
      </SpinnerStyl>
    );
  } else {
    return (
      <GeckoContainer>
        <GeckoInfo>
          <Col lg={8}>
            <Slide interval={1500} fade variant="info">
              <SlideImgWrap>
                <GeckoDetailImg src={gecko?.img} />
              </SlideImgWrap>
              <SlideImgWrap>
                <GeckoDetailImg src={gecko?.img2} />
              </SlideImgWrap>
              <SlideImgWrap>
                <GeckoDetailImg src={gecko?.img3} />
              </SlideImgWrap>
            </Slide>
          </Col>
          <Col lg={4}>
            <GeckoText>
              <TextInfo>
                {" "}
                <Span>Name:</Span> {gecko?.name}
              </TextInfo>
              <TextInfo>
                <Span>Morph: </Span> {gecko?.morph}
              </TextInfo>
              <TextInfo>
                {" "}
                <Span>Gender:</Span> {gecko?.gender}
              </TextInfo>
              <TextInfo>
                {" "}
                <Span>Birth : </Span> {gecko?.birth}
              </TextInfo>
              <TextInfo>
                {" "}
                <Span>Parent : </Span> {gecko?.parent.join(" , ")}
              </TextInfo>
              <TextInfo>
                {" "}
                <Span>Shop : </Span> {gecko?.shop}
              </TextInfo>
            </GeckoText>
          </Col>
        </GeckoInfo>
        <GeckoInfo>
          <GeckoWeight />
        </GeckoInfo>
      </GeckoContainer>
    );
  }
};

export default GeckoDetail;

const GeckoContainer = styled(Container)`
  width: 100%;
`;
const GeckoInfo = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  margin-top: 80px;

  width: 100%;
`;
const Slide = styled(Carousel)`
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 80px;
    z-index: 0;
    width: 100%;
    height: 100%;
    max-width: 340px;
    max-height: 340px;
    min-height: 340px;
    min-width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  @media ${(props) => props.theme.desktop} {
    text-align: center;
    margin-bottom: 80px;
    z-index: 0;
    width: 100%;
    height: 100%;
    max-width: 840px;
    max-height: 840px;
    min-height: auto;
    min-width: auto;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SlideImgWrap = styled(Carousel.Item)`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
    max-width: 340px;
    max-height: 340px;
    min-height: 340px;
    min-width: auto;
    z-index: -1;
  }
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 100%;
    max-width: 840px;
    max-height: 840px;
    min-height: auto;
    min-width: auto;
    z-index: -1;
  }
`;
const GeckoDetailImg = styled.img`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
    max-width: 340px;
    max-height: 340px;
    min-height: 340px;
    min-width: auto;
    border-radius: 100%;
    object-fit: cover;
  }
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 100%;
    max-width: 840px;
    max-height: 840px;
    min-height: 840px;
    min-width: auto;
    object-fit: cover;
  }
`;
const GeckoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const TextInfo = styled.div`
  @media ${(props) => props.theme.mobile} {
    border-bottom: 2px solid #999;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }
  @media ${(props) => props.theme.desktop} {
    border-bottom: 2px solid #999;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }
`;
const Span = styled.span`
  font-weight: bold;
`;

const SpinnerStyl = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
