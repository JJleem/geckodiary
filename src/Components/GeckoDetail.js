import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Spinner, Carousel } from "react-bootstrap";
import GeckoWeight from "./GeckoWeight";
import { setPageTitle } from "./util";
const GeckoDetail = () => {
  const [gecko, setGecko] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getGeckoDetail = async () => {
    const url = `http://localhost:3004/crestedgecko/${id}`;
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
      (id >= 15 && id <= 15 && "빈치")
    } 
    의 기록`);
  }, []);

  useEffect(() => {
    getGeckoDetail();
  }, []);

  if (loading || gecko === null) {
    return <Spinner className="Spinner" animation="border" variant="success" />;
  } else {
    return (
      <Container>
        <Row className="gecko-info">
          <Col className="gecko-detail-img" lg={8}>
            <Carousel className="slide" fade variant="dark">
              <Carousel.Item className="slideImgWrap">
                <img src={gecko?.img} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideImgWrap">
                <img src={gecko?.img} />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideImgWrap">
                <img src={gecko?.img} />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={4}>
            <div className="gecko-text">
              <div className="textinfo">
                {" "}
                <span>Name:</span> {gecko?.name}
              </div>
              <div className="textinfo">
                <span>Morph: </span> {gecko?.morph}
              </div>
              <div className="textinfo">
                {" "}
                <span>Gender:</span> {gecko?.gender}
              </div>
              <div className="textinfo">
                {" "}
                <span>Birth : </span> {gecko?.birth}
              </div>
              <div className="textinfo">
                {" "}
                <span>Parent : </span> {gecko?.parent.join(" , ")}
              </div>
              <div className="textinfo">
                {" "}
                <span>Shop : </span> {gecko?.shop}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gecko-weight">
          <GeckoWeight />
        </Row>
      </Container>
    );
  }
};

export default GeckoDetail;
