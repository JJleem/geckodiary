import React from "react";
import "./WeightList.css";
import Button from "./Button";
import WeightItem from "./WeightItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const WeightList = ({ data }) => {
  const { id } = useParams();
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate(`/gecko/${id}/new`);
  };
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    data.sort(compare);
    copyList.sort(compare);
    setSortedData(data, copyList);
  }, [data, sortType]);

  return (
    <div className="WeightList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button text="NEW" type="positive" onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it, idx) => (
          <WeightItem key={idx} {...it} />
        ))}
      </div>
    </div>
  );
};

export default WeightList;
