import styles from "../../styles/components/diaryViewer/diaryText.module.css";

export default function DiaryText({ text }) {
  return <div className={styles.display}>{text}</div>;
}
