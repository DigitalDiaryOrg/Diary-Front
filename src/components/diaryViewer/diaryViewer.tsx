"use client";
import styles from "../../styles/components/diaryViewer/diaryViewer.module.css";

import DiaryDate from "./diaryDate";
import DiaryText from "./diaryText";

import { useEffect, useState } from "react";

export default function DiaryViewer({ date }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = localStorage.getItem(date);
    setData(getData ? JSON.parse(getData) : null);
  }, [date]);

  return (
    <>
      <div className={styles.diary_viewer}>
        <DiaryDate date={date} />
        {data ? <></> : <DiaryText text={"일기를 작성해보세요!"} />}
      </div>
    </>
  );
}
