import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { PrimaryButton } from "@company/commons/ui";
import { useModal } from "@company/commons/modal";
import { AgGridWrapper, type ColDef } from "@company/commons/aggrid";
import { CalendarWrapper, type CalendarEvent } from "@company/commons/calendar";
import { TimelineWrapper, type TimelineGroup, type TimelineItem } from "@company/commons/timeline";
import { ChartWrapper, type ChartDataItem } from "@company/commons/chart";
import { Layout } from "@/components/Layout";
import { DemoCard } from "@/components/DemoCard";
import { userService, type UserSummary } from "@/services/userService";
import { useDemoToast } from "@/hooks/useDemoToast";
import dayjs from "dayjs";

// AG-Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// react-calendar-timeline CSS
import "react-calendar-timeline/dist/style.css";

// AG-Grid 데모 데이터
interface RowData {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
}

const gridRowData: RowData[] = [
  { id: 1, name: "김철수", email: "kim@example.com", department: "개발팀", salary: 5000 },
  { id: 2, name: "이영희", email: "lee@example.com", department: "디자인팀", salary: 4500 },
  { id: 3, name: "박민수", email: "park@example.com", department: "기획팀", salary: 4800 },
  { id: 4, name: "정소영", email: "jung@example.com", department: "마케팅팀", salary: 4200 },
  { id: 5, name: "최준혁", email: "choi@example.com", department: "개발팀", salary: 5500 },
];

const gridColDefs: ColDef<RowData>[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "이름" },
  { field: "email", headerName: "이메일", flex: 2 },
  { field: "department", headerName: "부서" },
  { field: "salary", headerName: "연봉(만원)", valueFormatter: (p) => p.value?.toLocaleString() ?? "" },
];

// Calendar 데모 데이터
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
];

// Timeline 데모 데이터
const timelineGroups: TimelineGroup[] = [
  { id: 1, title: "개발팀" },
  { id: 2, title: "디자인팀" },
  { id: 3, title: "기획팀" },
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
];

// Chart 데모 데이터
const chartData: ChartDataItem[] = [
  { name: "1월", sales: 4000, profit: 2400 },
  { name: "2월", sales: 3000, profit: 1398 },
  { name: "3월", sales: 2000, profit: 9800 },
  { name: "4월", sales: 2780, profit: 3908 },
  { name: "5월", sales: 1890, profit: 4800 },
  { name: "6월", sales: 2390, profit: 3800 },
];

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserSummary | null>(null);
  const { success, error, showDemoToast } = useDemoToast();
  const { open: openModal, close: closeModal } = useModal();

  const handleLoadUser = async () => {
    setLoading(true);
    try {
      const data = await userService.getCurrentUser();
      setUser(data);
      success(`${data.name} 님 정보를 성공적으로 불러왔어요!`);
    } catch (err) {
      console.error(err);
      error("사용자 정보를 가져오지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    openModal("default", {
      title: "알림",
      content: <Typography>MUI 커스텀 모달입니다. 모달 내용을 자유롭게 구성할 수 있어요.</Typography>,
      actions: (
        <Button variant="contained" onClick={closeModal}>
          확인
        </Button>
      ),
    });
  };

  const handleEventClick = (event: CalendarEvent) => {
    success(`이벤트 클릭: ${event.title}`);
  };

  return (
    <Layout
      header="TEST APP B 데모"
      subtitle="UI · API · Store · Grid · Calendar · Timeline · Chart 구성 요소를 실제 앱처럼 검증할 수 있어요."
    >
      <Stack spacing={3}>
        {/* 기존 API/Toast 데모 */}
        <DemoCard
          title="공통 API 클라이언트"
          description="Axios + refresh interceptor"
          footer="401 응답이 내려오면 refresh 토큰 플로우가 큐 기반으로 재시도돼요."
        >
          <Stack spacing={2}>
            <PrimaryButton loading={loading} onClick={handleLoadUser}>
              사용자 정보 불러오기
            </PrimaryButton>
            {user && (
              <Stack spacing={0.5} divider={<Divider flexItem />}>
                <Typography variant="subtitle2" color="text.secondary">
                  최근 응답
                </Typography>
                <Typography variant="body2">
                  {user.name} ({user.email}) @ {user.company?.name}
                </Typography>
              </Stack>
            )}
          </Stack>
        </DemoCard>

        <DemoCard
          title="Zustand 이벤트 버스"
          description="ToastProvider + useToast 훅"
          footer="React-Toastify 컨테이너가 commons 패키지 안에서 초기화돼요."
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <PrimaryButton color="secondary" onClick={showDemoToast}>
              토스트 발행하기
            </PrimaryButton>
            <PrimaryButton onClick={() => success("성공 토스트입니다!")}>Success</PrimaryButton>
            <PrimaryButton color="error" onClick={() => error("에러 토스트입니다.")}>
              Error
            </PrimaryButton>
          </Stack>
        </DemoCard>

        {/* Modal 데모 */}
        <DemoCard
          title="MUI 커스텀 모달"
          description="@company/commons/modal"
          footer="zustand 기반 전역 모달 상태 관리"
        >
          <PrimaryButton onClick={handleOpenModal}>모달 열기</PrimaryButton>
        </DemoCard>

        {/* AG-Grid 데모 */}
        <DemoCard
          title="AG-Grid Enterprise"
          description="@company/commons/aggrid"
          footer="공통 설정이 적용된 AG-Grid 래퍼"
        >
          <AgGridWrapper<RowData>
            rowData={gridRowData}
            columnDefs={gridColDefs}
            height={250}
            theme="quartz"
          />
        </DemoCard>

        {/* Calendar 데모 */}
        <DemoCard
          title="FullCalendar"
          description="@company/commons/calendar"
          footer="한국어 로케일이 기본 적용된 캘린더 래퍼"
        >
          <CalendarWrapper
            events={calendarEvents}
            height={400}
            onEventClick={handleEventClick}
          />
        </DemoCard>

        {/* Timeline 데모 */}
        <DemoCard
          title="React Calendar Timeline"
          description="@company/commons/timeline"
          footer="dayjs 기반 타임라인 래퍼"
        >
          <TimelineWrapper
            groups={timelineGroups}
            items={timelineItems}
            defaultTimeStart={dayjs().startOf("day").toDate()}
            defaultTimeEnd={dayjs().endOf("day").toDate()}
            height={200}
          />
        </DemoCard>

        {/* Chart 데모 */}
        <DemoCard
          title="Recharts"
          description="@company/commons/chart"
          footer="ResponsiveContainer가 적용된 차트 래퍼"
        >
          <Stack spacing={3}>
            <Typography variant="subtitle2">Line Chart</Typography>
            <ChartWrapper
              type="line"
              data={chartData}
              series={[
                { dataKey: "sales", name: "매출", color: "#8884d8" },
                { dataKey: "profit", name: "수익", color: "#82ca9d" },
              ]}
              height={250}
            />
            <Typography variant="subtitle2">Bar Chart</Typography>
            <ChartWrapper
              type="bar"
              data={chartData}
              series={[
                { dataKey: "sales", name: "매출" },
                { dataKey: "profit", name: "수익" },
              ]}
              height={250}
            />
          </Stack>
        </DemoCard>
      </Stack>
    </Layout>
  );
};
