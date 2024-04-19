import React from "react";
import { useNavigate } from "react-router-dom";

const GeckoCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/gecko/${item.id}`);
  };
  return (
    <div className="geckocard" onClick={showDetail}>
      d
      {/* <img src={item?.img} alt="imginfo" />
      <div>Concious Choiceddd</div>
      <div>{item?.name}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신상품" : ""}</div> */}
      d
    </div>
  );
};

export default GeckoCard;
