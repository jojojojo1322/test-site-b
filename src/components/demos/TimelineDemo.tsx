import Stack from "@mui/material/Stack";
import { TimelineWrapper, type TimelineGroup, type TimelineItem } from "@company/commons/timeline";
import { DemoCard } from "@/components/DemoCard";
import dayjs from "dayjs";

import "react-calendar-timeline/dist/style.css";

const timelineGroups: TimelineGroup[] = [
  { id: 1, title: "개발팀" },
  { id: 2, title: "디자인팀" },
  { id: 3, title: "기획팀" },
  { id: 4, title: "마케팅팀" },
  { id: 5, title: "인사팀" },
];

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    group: 1,
    title: "API 개발",
    start_time: dayjs().startOf("day").valueOf(),
    end_time: dayjs().add(4, "hour").valueOf(),
  },
  {
    id: 2,
    group: 2,
    title: "UI 디자인",
    start_time: dayjs().add(2, "hour").valueOf(),
    end_time: dayjs().add(6, "hour").valueOf(),
  },
  {
    id: 3,
    group: 3,
    title: "기획서 작성",
    start_time: dayjs().add(1, "hour").valueOf(),
    end_time: dayjs().add(5, "hour").valueOf(),
  },
  {
    id: 4,
    group: 1,
    title: "코드 리뷰",
    start_time: dayjs().add(6, "hour").valueOf(),
    end_time: dayjs().add(8, "hour").valueOf(),
  },
  {
    id: 5,
    group: 4,
    title: "캠페인 기획",
    start_time: dayjs().add(3, "hour").valueOf(),
    end_time: dayjs().add(7, "hour").valueOf(),
  },
  {
    id: 6,
    group: 5,
    title: "면접 진행",
    start_time: dayjs().add(4, "hour").valueOf(),
    end_time: dayjs().add(6, "hour").valueOf(),
  },
  {
    id: 7,
    group: 2,
    title: "디자인 리뷰",
    start_time: dayjs().add(8, "hour").valueOf(),
    end_time: dayjs().add(10, "hour").valueOf(),
  },
];

export const TimelineDemo = () => {
  return (
    <Stack spacing={3}>
      <DemoCard
        title="React Calendar Timeline"
        description="@company/commons/timeline"
        footer="dayjs 기반 타임라인 래퍼 (v0.30.0-beta)"
      >
        <TimelineWrapper
          groups={timelineGroups}
          items={timelineItems}
          defaultTimeStart={dayjs().startOf("day").toDate()}
          defaultTimeEnd={dayjs().endOf("day").toDate()}
          height={300}
        />
      </DemoCard>
    </Stack>
  );
};
