import Navigation from "../../../components/navigation/navigation";
import Calendar from "../../../components/calendar/calendar";
import DiaryViewer from "../../../components/diaryViewer/diaryViewer";

interface DateParms {
  params: { id: string };
}

export default function Diary({ params: { id } }: DateParms) {
  return (
    <>
      <Navigation />
      <Calendar selectedDate={id} />
      <DiaryViewer date={id} />
    </>
  );
}
