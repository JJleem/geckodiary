import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GeckoCard from "./GeckoCard";
import { setPageTitle } from "./util";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Aww = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const All = () => {
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  const [geckoList, setGeckoList] = useState([]);
  const getGecko = async () => {
    const url = `http://localhost:3004/crestedgecko/?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setGeckoList(data);
  };
  useEffect(() => {
    setPageTitle(`Breeding Diary`);
  }, []);
  useEffect(() => {
    getGecko();
  }, [query]);

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
