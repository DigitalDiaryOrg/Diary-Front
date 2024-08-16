"use client";
import styles from "../../styles/components/calendar/calendar.module.css";

import { MdNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getDaysInMonth,
  startOfMonth,
  getDay,
  format,
  addMonths,
  subMonths,
  parseISO,
} from "date-fns";

interface CalendarProps {
  selectedDate: string;
}

export default function Calendar({ selectedDate }: CalendarProps) {
  const router = useRouter();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentDate, setCurrentDate] = useState(parseISO(selectedDate));

  const totalDays = getDaysInMonth(currentDate);
  const firstDayOfMonth = startOfMonth(currentDate);
  const firstDayIndex = getDay(firstDayOfMonth);
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const calendarDays = Array(firstDayIndex).fill(null).concat(daysArray);

  const currentMonth = format(currentDate, "yyyy / MM");

  const moveDate = (day: number) => {
    const year = format(currentDate, "yyyy");
    const month = format(currentDate, "MM");
    const dayString = day.toString().padStart(2, "0");
    const newDate = `${year}-${month}-${dayString}`;
    router.push(`/diary/${newDate}`);
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };
  const selectedDateObj = parseISO(selectedDate);
  const selectedDay = format(selectedDateObj, "d");
  const selectedMonth = format(selectedDateObj, "M");

  return (
    <>
      <div className={styles.selectMonth}>
        <MdNavigateBefore
          className={styles.icon}
          onClick={handlePreviousMonth}
        />
        <div>{currentMonth}</div>
        <MdOutlineNavigateNext
          className={styles.icon}
          onClick={handleNextMonth}
        />
      </div>

      <div className={styles.calendar}>
        {days.map((dayname, index) => (
          <div key={index}>{dayname}</div>
        ))}
      </div>

      <div className={styles.calendar}>
        {calendarDays.map((day, index) => (
          <div
            key={index}
            onClick={() => day && moveDate(day)}
            className={
              day &&
              day.toString() === selectedDay &&
              format(currentDate, "M") === selectedMonth
                ? styles.selected
                : ""
            }
          >
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
