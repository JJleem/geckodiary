import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDiary } from "./util";
import WeightHeader from "./GeckoWeight Component/WeightHeader";
import Button from "./GeckoWeight Component/Button";
import { getFormattedDate, setPageTitle } from "./util";
import Viewers from "./Viewers";
import { useEffect } from "react";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { num } = useParams();
  const data = useDiary(num);
  console.log(data);
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
    의 일기`);
  }, []);
  const goback = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/gecko/${id}/edit/${num}`);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    console.log(content);
    const title = `${getFormattedDate(new Date(Number(date)))} 일기`;
    return (
      <div>
        <WeightHeader
          leftChild={<Button text="< 뒤로가기" onClick={goback} />}
          title={title}
          rightChild={<Button text="수정하기" onClick={goEdit} />}
        />
        <Viewers emotionId={emotionId} content={content} num={num} />
      </div>
    );
  }
};

export default Diary;
