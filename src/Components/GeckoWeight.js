import WeightHeader from "./GeckoWeight Component/WeightHeader";
import Button from "./GeckoWeight Component/Button";
import WeightList from "./GeckoWeight Component/WeightList";
import React, { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "./util";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const GeckoWeight = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams;
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [pivotDate, data]);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월 
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
    }`;
  return (
    <WeightWrap>
      <WeightHeader
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <WeightList data={filteredData} />
    </WeightWrap>
  );
};

export default GeckoWeight;

const WeightWrap = styled.div``;
