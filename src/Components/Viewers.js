import React, { useContext } from "react";
import "./Viewers.css";
import { emotionList } from "./util";
import { useParams } from "react-router-dom";

const Viewers = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  const { id } = useParams();

  return (
    <div className="Viewer">
      <section>
        <h4>
          {id >= 0 && id <= 0 && "백룡"}
          {id >= 1 && id <= 1 && "참깨"}
          {id >= 2 && id <= 2 && "튼튼"}
          {id >= 3 && id <= 3 && "뿌치"}
          {id >= 4 && id <= 4 && "레오"}
          {id >= 5 && id <= 5 && "티티"}
          {id >= 6 && id <= 6 && "나나"}
          {id >= 7 && id <= 7 && "송이"}
          {id >= 8 && id <= 8 && "또치"}
          {id >= 9 && id <= 9 && "달찌"}
          {id >= 10 && id <= 10 && "마찌"}
          {id >= 11 && id <= 11 && "춘향"}
          {id >= 12 && id <= 12 && "무뮤"}
          {id >= 13 && id <= 13 && "옹치"}
          {id >= 14 && id <= 14 && "몽룡"}
          {id >= 15 && id <= 15 && "빈치"} 의 감정
        </h4>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId}`,
          ].join(" ")}
        >
          <img src={emotionItem.img} alt={emotionItem.name} />
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4>
          {" "}
          {id >= 0 && id <= 0 && "백룡"}
          {id >= 1 && id <= 1 && "참깨"}
          {id >= 2 && id <= 2 && "튼튼"}
          {id >= 3 && id <= 3 && "뿌치"}
          {id >= 4 && id <= 4 && "레오"}
          {id >= 5 && id <= 5 && "티티"}
          {id >= 6 && id <= 6 && "나나"}
          {id >= 7 && id <= 7 && "송이"}
          {id >= 8 && id <= 8 && "또치"}
          {id >= 9 && id <= 9 && "달찌"}
          {id >= 10 && id <= 10 && "마찌"}
          {id >= 11 && id <= 11 && "춘향"}
          {id >= 12 && id <= 12 && "무뮤"}
          {id >= 13 && id <= 13 && "옹치"}
          {id >= 14 && id <= 14 && "몽룡"}
          {id >= 15 && id <= 15 && "빈치"} 의 기록
        </h4>
        <div className="content_wrapper">{content}</div>
      </section>
    </div>
  );
};

export default Viewers;
