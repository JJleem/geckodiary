import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeightHeader from "./GeckoWeight Component/WeightHeader";
import Button from "./GeckoWeight Component/Button";
import Editor from "./Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "./util";
import { useParams } from "react-router-dom";
const New = () => {
  const { id } = useParams();

  useEffect(() => {
    setPageTitle("새 일기 쓰기");
  }, []);
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    const paramsid = id;
    const {  date, emotionId, content } = data;
    onCreate(id, paramsid, date, emotionId, content);
    navigate(-1);
  };
  return (
    <div>
      <WeightHeader
        leftChild={<Button text="< 뒤로가기" onClick={goback} />}
        title="새 일기쓰기"
      />
      d
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
