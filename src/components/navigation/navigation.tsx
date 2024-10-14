"use client";
import styles from "../../styles/components/navigation/navigation.module.css";

import { RiBarChartFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const gotoUser = () => {
    router.push(`/settings`);
  };

  const gotoStats = () => {
    router.push(`/stats`);
  };

  return (
    <nav className={styles.nav}>
      <RiBarChartFill className={styles.icon} onClick={gotoStats} />
      <IoMdSettings className={styles.icon} onClick={gotoUser} />
    </nav>
  );
}
