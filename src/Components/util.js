import emotion1 from "../img/emotion1.png";
import emotion2 from "../img/emotion2.png";
import emotion3 from "../img/emotion3.png";
import emotion4 from "../img/emotion4.png";
import emotion5 from "../img/emotion5.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useParams } from "react-router-dom";
// 외부에서쓰려면 모듈화해야함
export const getEmotionImgById = (emotionId) => {
  // 숫자를받을거라 숫자를 문자로 바꾸기 String
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    // 존재하지않는 값이나 안적힌다면 default 값을 준다.
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "쏘쏘",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "매우나쁨",
    img: getEmotionImgById(5),
  },
];

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
};
setPageTitle();

export const useDiary = () => {
  const { num } = useParams();
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  console.log(data.num);
  console.log(num);
  useEffect(() => {
    const matchDiary = data.find((it) => num === it.num);
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      // alert("존재하지 않는 일기입니다.");
      // navigate(-1);
    }
  }, [num, data]);
  return diary;
};
