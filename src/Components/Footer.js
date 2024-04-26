import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterMain>
      <FooterWrap>
        <div className="footerinfo">
          <FooterInfoText>크레스티드 게코에 대해 더 알고싶다면?</FooterInfoText>
          <div>
            <Astyle
              href="https://namu.wiki/w/%EB%B3%8F%EB%8F%84%EB%A7%88%EB%B1%80%EB%B6%99%EC%9D%B4"
              className="namuurl"
            >
              나무위키 사이트 바로가기 Click
            </Astyle>
          </div>
        </div>
      </FooterWrap>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 200px;
    background: rgba(0, 150, 0, 0.7);
    font-size: 1rem;
    position: relative;
    z-index: 0;
    white-space: nowrap;
  }
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 200px;
    background: rgba(0, 150, 0, 0.7);
    font-size: 1.5rem;
    position: relative;
    z-index: 0;
  }
`;
const FooterWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FooterInfoText = styled.div`
  font-family: "Gowun Dodum", sans-serif;
`;
const Astyle = styled.a`
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const Geckocard = styled.div`
  @media ${(props) => props.theme.mobile} {
  }
  @media ${(props) => props.theme.desktop} {
  }
`;
const GeckoCardImg = styled.img`
  width: 100%;
`;
