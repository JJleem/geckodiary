import React from "react";
import "./WeightItem.css";
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useParams } from "react-router-dom";
const WeightItem = ({ num, paramsid, date, emotionId, content }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/gecko/${id}/edit/${num}/diary`);
  };
  const goEdit = () => {
    navigate(`/gecko/${id}/edit/${num}`);
  };

  const dataString = localStorage.getItem("diary");
  const data = JSON.parse(dataString);
  const { id } = useParams();

  if (paramsid === id) {
    return (
      <div className="WeightItem">
        <div
          onClick={goDetail}
          className={["img_section", `img_section_${emotionId}`].join(" ")}
        >
          <img src={getEmotionImgById(emotionId)} />
        </div>
        <div onClick={goDetail} className="info_section">
          <div className="date_wrapper">
            {new Date(date).toLocaleDateString()}
          </div>
          <div className="params">
            {paramsid >= 0 && paramsid <= 0 && "백룡"}
            {paramsid >= 1 && paramsid <= 1 && "참깨"}
            {paramsid >= 2 && paramsid <= 2 && "튼튼"}
            {paramsid >= 3 && paramsid <= 3 && "뿌치"}
            {paramsid >= 4 && paramsid <= 4 && "레오"}
            {paramsid >= 5 && paramsid <= 5 && "티티"}
            {paramsid >= 6 && paramsid <= 6 && "나나"}
            {paramsid >= 7 && paramsid <= 7 && "송이"}
            {paramsid >= 8 && paramsid <= 8 && "또치"}
            {paramsid >= 9 && paramsid <= 9 && "달찌"}
            {paramsid >= 10 && paramsid <= 10 && "마찌"}
            {paramsid >= 11 && paramsid <= 11 && "춘향"}
            {paramsid >= 12 && paramsid <= 12 && "무뮤"}
            {paramsid >= 13 && paramsid <= 13 && "옹치"}
            {paramsid >= 14 && paramsid <= 14 && "몽룡"}
            {paramsid >= 15 && paramsid <= 15 && "요미"}
            {paramsid >= 16 && paramsid <= 16 && "빈치"}
          </div>
          <div className="content_wrapper">{content.slice(0, 25)}</div>
        </div>
        <div className="button_section">
          <Button text="수정하기" onClick={goEdit} />
        </div>
      </div>
    );
  }
};

// export default React.memo(WeightItem);
export default WeightItem;
