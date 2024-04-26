import "./App.css";
import NavBar from "./Components/NavBar";
import All from "./Components/All";
import Toggle from "./Components/Toggle";
import GeckoDetail from "./Components/GeckoDetail";
import Edit from "./Components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import New from "./Components/New";
import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Diary from "./Components/Diary";
import styled from "styled-components";
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.num) === String(action.data.num) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.num) !== String(action.targetId)
      );
      console.log(state.filter((it) => String(it.num)));
      console.log(state.filter((it) => String(action.num)));
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const { id } = useParams();
  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].num + 1;

    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (id, paramsid, date, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        num: idRef.current,
        paramsid,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (num, paramsid, date, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        num,
        paramsid,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <AppStyle>
            <NavBar />

            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/gecko/:id" element={<GeckoDetail />} />
              <Route path="/gecko/:id/new" element={<New />} />
              <Route path="/gecko/:id/edit/:num" element={<Edit />} />
              <Route path="/gecko/:id/edit/:num/diary" element={<Diary />} />
            </Routes>
            <Toggle />
            <Footer />
          </AppStyle>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;

const AppStyle = styled.div`
  overflow-x: hidden;
`;
