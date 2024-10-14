"use client";

import box from "../../styles/components/diaryEditer/editBox.module.css";
import styles from "../../styles/components/diaryEditer/editText.module.css";

import { useRef, useEffect } from "react";

export default function EditText({
  title,
  content,
  setContent,
  placeholder,
  minHeight,
}) {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setContent(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.minHeight = `${minHeight}px`;
      adjustHeight();
    }
  }, [minHeight]);

  useEffect(() => {
    adjustHeight();
  }, [content]);

  return (
    <div className={box.container}>
      <p className={box.title}>{title}</p>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        ref={textareaRef}
        onInput={handleInput}
        rows={1}
        value={content}
      />
    </div>
  );
}
