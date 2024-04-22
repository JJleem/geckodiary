import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GeckoCard from "./GeckoCard";

const All = () => {
  const [geckoList, setGeckoList] = useState([]);
  const getGecko = async () => {
    const url = `http://localhost:3004/crestedgecko`;
    const response = await fetch(url);
    const data = await response.json();
    setGeckoList(data);
  };

  useEffect(() => {
    getGecko();
  }, []);

  return (
    <Container>
      <Row>
        {geckoList.map((item, idx) => (
          <Col key={idx} lg={4}>
            <GeckoCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default All;
