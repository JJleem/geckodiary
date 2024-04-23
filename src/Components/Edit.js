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
  const numData = useContext(DiaryStateContext);
  console.log(numData.map((it) => it.num));
  const data = useDiary();
  useEffect(() => {
    setPageTitle(`${id}번째 일기 Edit`);
  }, []);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("기록을 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate(-1);
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, emotionId, content } = data;
      onUpdate(date, emotionId, content);
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
