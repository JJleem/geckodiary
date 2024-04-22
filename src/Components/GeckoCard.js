import React from "react";
import { useNavigate } from "react-router-dom";

const GeckoCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/gecko/${item.id}`);
  };
  return (
    <div className="geckocard" onClick={showDetail}>
      <img src={item?.img} alt="imginfo" />

      <div className="textinfo">
        {" "}
        <span>Name:</span> {item?.name}
      </div>
      <div className="textinfo">
        <span>Morph: </span> {item?.morph}
      </div>
      <div className="textinfo">
        {" "}
        <span>Gender:</span> {item?.gender}
      </div>
      <div className="textinfo">
        {" "}
        <span>Birth : </span> {item?.birth}
      </div>
    </div>
  );
};

export default GeckoCard;
