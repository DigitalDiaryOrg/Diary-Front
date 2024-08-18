import styles from "../../styles/components/diaryViewer/diaryPraise.module.css";

export default function DiaryPraise({ text }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>WELL DONE !</p>
      <div className={styles.praise}>{text}</div>
    </div>
  );
}
