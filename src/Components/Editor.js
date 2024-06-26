import "./Editor.css";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { getFormattedDate, emotionList } from "./util";
import Button from "./GeckoWeight Component/Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
    num: "",
    paramsid: "",
  });

  const handlecChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
    console.log(e.target);
  };

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(initData.date)),
      });
    }
  }, [initData]);

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input
            type="date"
            value={state.date}
            onChange={handlecChangeDate}
          ></input>
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" type="negative" onClick={handleOnGoBack} />
        <Button text="작성완료" type="positive" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
