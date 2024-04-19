import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import GeckoCard from "./GeckoCard";
const All = () => {
  const [geckoList, setGeckoList] = useState([]);
  const getGecko = async () => {
    const url = `http://localhost:3004`;
    const response = await fetch(url);
    const data = await response.json();
    setGeckoList(data);
  };
  return (
    <Container>
      <Row>
        {geckoList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <GeckoCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default All;
