import styles from "../../styles/components/settings/resetData.module.css";

import { IoMdTrash } from "react-icons/io";
import { useState } from "react";

export default function ResetData() {
  const [check, setCheck] = useState(false);
  const [deleteAll, setDeleteAll] = useState("");

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteAll(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && deleteAll === "DELETE ALL") {
      setDeleteAll("");
      localStorage.clear();
      alert("모든 데이터가 삭제되었습니다!");
    } else if (e.key === "Enter" && deleteAll !== "DELETE ALL") {
      alert("잘못된 입력입니다!");
    }
  };

  return (
    <>
      <div className={styles.option} onClick={handleCheck}>
        <IoMdTrash />
        데이터 초기화
      </div>
      {check && (
        <div className={styles.detail}>
          <p>모든 데이터를 삭제합니다!</p>
          <p>아래에 DELETE ALL을 입력해주세요.</p>
          <input
            type="text"
            placeholder="DELETE ALL"
            value={deleteAll}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
    </>
  );
}
