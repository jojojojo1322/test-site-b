import Stack from "@mui/material/Stack";
import { CalendarWrapper, type CalendarEvent } from "@company/commons/calendar";
import { DemoCard } from "@/components/DemoCard";
import { useDemoToast } from "@/hooks/useDemoToast";
import dayjs from "dayjs";

const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "팀 회의",
    start: dayjs().format("YYYY-MM-DD"),
    color: "#3788d8",
  },
  {
    id: "2",
    title: "프로젝트 마감",
    start: dayjs().add(3, "day").format("YYYY-MM-DD"),
    color: "#e53935",
  },
  {
    id: "3",
    title: "워크샵",
    start: dayjs().add(7, "day").format("YYYY-MM-DD"),
    end: dayjs().add(8, "day").format("YYYY-MM-DD"),
    color: "#43a047",
  },
  {
    id: "4",
    title: "코드 리뷰",
    start: dayjs().add(1, "day").format("YYYY-MM-DD"),
    color: "#7b1fa2",
  },
  {
    id: "5",
    title: "출장",
    start: dayjs().add(10, "day").format("YYYY-MM-DD"),
    end: dayjs().add(12, "day").format("YYYY-MM-DD"),
    color: "#00796b",
  },
  {
    id: "6",
    title: "면접",
    start: dayjs().add(5, "day").format("YYYY-MM-DD"),
    color: "#f57c00",
  },
];

export const CalendarDemo = () => {
  const { success } = useDemoToast();

  const handleEventClick = (event: CalendarEvent) => {
    success(`이벤트 클릭: ${event.title}`);
  };

  return (
    <Stack spacing={3}>
      <DemoCard
        title="FullCalendar"
        description="@company/commons/calendar"
        footer="한국어 로케일이 기본 적용된 캘린더 래퍼"
      >
        <CalendarWrapper
          events={calendarEvents}
          height={500}
          onEventClick={handleEventClick}
        />
      </DemoCard>
    </Stack>
  );
};
