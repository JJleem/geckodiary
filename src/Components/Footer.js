import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerwrap">
        <div className="footerinfo">
          <div className="footerinfo_text">
            크레스티드 게코에 대해 더 알고싶다면?
          </div>
          <div className="footerinfo_url">
            <a
              href="https://namu.wiki/w/%EB%B3%8F%EB%8F%84%EB%A7%88%EB%B1%80%EB%B6%99%EC%9D%B4"
              className="namuurl"
            >
              나무위키 사이트 바로가기 Click
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
