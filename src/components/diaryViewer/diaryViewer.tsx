"use client";
import styles from "../../styles/components/diaryViewer/diaryViewer.module.css";

import DiaryDate from "./diaryDate";
import DiaryText from "./diaryText";
import DiaryEmotion from "./diaryEmotion";
import DiaryPraise from "./diaryPraise";

import { useEffect, useState } from "react";

export default function DiaryViewer({ date }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = localStorage.getItem(date);
    setData(getData ? JSON.parse(getData) : null);
  }, [date]);

  return (
    <>
      <div className={styles.container}>
        <DiaryDate date={date} />
        {data ? (
          <>
            {data.content && <DiaryText text={data.content} />}
            {data.emotion && data.emotion.length > 0 && (
              <DiaryEmotion emotions={data.emotion} />
            )}
            {data.praise && <DiaryPraise text={data.praise} />}
          </>
        ) : (
          <DiaryText text={"일기를 작성해보세요!"} />
        )}
      </div>
    </>
  );
}
