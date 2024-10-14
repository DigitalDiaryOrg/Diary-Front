"use client";

import header from "../../styles/app/header.module.css";

import { MdAccountCircle, MdColorLens, MdFileCopy } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import ResetData from "../../components/settings/resetData";

export default function Settings() {
  const router = useRouter();
  const now = new Date();
  const nowDate = format(now, "yyyy-MM-dd");

  const close = () => {
    router.push(`/diary/${nowDate}`);
  };

  return (
    <div>
      <div className={header.container}>
        <IoMdClose className={header.icon} onClick={close} />
        <span className={header.title}>설정</span>
        <IoMdClose className={header.hidden} />
      </div>

      <div className={header.list}>
        <ResetData />
      </div>
    </div>
  );
}
