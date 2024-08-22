"use client";

import styles from "../../../../styles/app/diaryEdit.module.css";
import header from "../../../../styles/app/header.module.css";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

import EditText from "../../../../components/diaryEditer/editText";
import EditEmotion from "../../../../components/diaryEditer/editEmotion";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface DateParms {
  params: { id: string };
}

export default function DiaryEdit({ params: { id } }: DateParms) {
  const router = useRouter();

  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState([]);
  const [praise, setPraise] = useState("");

  useEffect(() => {
    const getData = localStorage.getItem(id);
    const data = getData ? JSON.parse(getData) : null;

    if (data) {
      setContent(data.content || "");
      setEmotion(data.emotion || []);
      setPraise(data.praise || "");
    }
  }, [id]);

  const gotoPrevious = () => {
    router.push(`/diary/${id}`);
  };

  const editComplete = () => {
    const newData = {
      date: id,
      content: content,
      emotion: emotion,
      praise: praise,
    };
    localStorage.setItem(id, JSON.stringify(newData));
    router.push(`/diary/${id}`);
  };

  return (
    <>
      <div className={header.container}>
        <IoMdClose className={header.icon} onClick={gotoPrevious} />
        <span className={header.title}>{id}</span>
        <IoMdCheckmark className={header.icon} onClick={editComplete} />
      </div>

      <div className={styles.container}>
        <EditText
          title={"CONTENT"}
          content={content}
          setContent={setContent}
          placeholder={"오늘의 일기를 입력해주세요!"}
          minHeight={200}
        />
        <EditEmotion emotion={emotion} setEmotion={setEmotion} />
        <EditText
          title={"PRAISE ME"}
          content={praise}
          setContent={setPraise}
          placeholder={"오늘의 잘한 점을 입력해주세요!"}
          minHeight={50}
        />
      </div>
    </>
  );
}
