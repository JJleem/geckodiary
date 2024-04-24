import React, { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import WeightHeader from "./GeckoWeight Component/WeightHeader";
import Button from "./GeckoWeight Component/Button";
import Editor from "./Editor";
import { setPageTitle, useDiary } from "./util";
import { DiaryStateContext } from "../App";

const Edit = () => {
  const { id } = useParams();
  const { num } = useParams();

  const data = useDiary(num);
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
    의 일기 수정하기`);
  }, []);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("기록을 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(num);
      navigate(`/gecko/${id}`);
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { num, paramsid, date, emotionId, content } = data;
      onUpdate(num, paramsid, date, emotionId, content);
      navigate(-1);
    }
  };
  if (!data) {
    return <div>일기를 불러오고있습니다...</div>;
  } else {
    return (
      <div>
        <WeightHeader
          leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
          title="일기 수정하기"
          rightChild={
            <Button text="삭제하기" type="negative" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
