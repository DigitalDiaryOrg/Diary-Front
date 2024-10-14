import styles from "../../styles/components/diaryViewer/diaryEmotion.module.css";

export default function DiaryEmotion({ emotions }) {
  return (
    <>
      <div className={styles.emotionbox}>
        {emotions.map((emotion, index) => (
          <div className={styles.emotion} key={index}>
            #{emotion}
          </div>
        ))}
      </div>
    </>
  );
}
