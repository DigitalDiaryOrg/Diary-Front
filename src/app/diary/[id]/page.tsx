import Calendar from "../../../components/calendar/calendar";

interface DateParms {
  params: { id: string };
}

export default function Diary({ params: { id } }: DateParms) {
  return (
    <>
      <Calendar selectedDate={id} />
    </>
  );
}
