"use client";
import styles from "../../styles/components/diaryViewer/diaryDate.module.css";

import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function DiaryDate({ date }) {
  const router = useRouter();
  const dateString = format(date, "yyyy. M. d");

  const startEdit = () => {
    router.push(`/diary/edit/${date}`);
  };

  return (
    <div className={styles.container}>
      <span className={styles.date}>{dateString}</span>
      <div>
        <MdEdit className={styles.btn} onClick={startEdit} />
        <AiFillDelete className={styles.btn} />
      </div>
    </div>
  );
}
