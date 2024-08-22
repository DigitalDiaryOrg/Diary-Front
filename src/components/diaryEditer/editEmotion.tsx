"use client";

import styles from "../../styles/components/diaryEditer/editEmotion.module.css";
import box from "../../styles/components/diaryEditer/editBox.module.css";

import { happyList, sadList } from "./emotionList";

import { useCallback } from "react";

interface EditEmotionsProps {
  emotion: string[];
  setEmotion: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function EditEmotion({
  emotion,
  setEmotion,
}: EditEmotionsProps) {
  const handleAddEmotion = useCallback(
    (name: string) => {
      setEmotion((prevEmotions) => {
        if (prevEmotions.includes(name)) {
          return prevEmotions.filter((emotion) => emotion !== name);
        } else {
          return [...prevEmotions, name];
        }
      });
    },
    [setEmotion]
  );

  return (
    <>
      <div className={box.container}>
        <p className={box.title}>EMOTIONS</p>
        <div className={styles.container}>
          <div className={styles.list}>
            {happyList.map((name, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  emotion.includes(name) ? styles.selected : ""
                }`}
                onClick={() => handleAddEmotion(name)}
              >
                {name}
              </div>
            ))}
          </div>
          <div className={styles.list}>
            {sadList.map((name, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  emotion.includes(name) ? styles.selected : ""
                }`}
                onClick={() => handleAddEmotion(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
