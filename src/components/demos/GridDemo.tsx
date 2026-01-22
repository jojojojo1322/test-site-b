import Stack from "@mui/material/Stack";
import { AgGridWrapper, type ColDef } from "@company/commons/aggrid";
import { DemoCard } from "@/components/DemoCard";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface RowData {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
  status: string;
}

const gridRowData: RowData[] = [
  { id: 1, name: "김철수", email: "kim@example.com", department: "개발팀", salary: 5000, joinDate: "2020-03-15", status: "재직" },
  { id: 2, name: "이영희", email: "lee@example.com", department: "디자인팀", salary: 4500, joinDate: "2021-06-01", status: "재직" },
  { id: 3, name: "박민수", email: "park@example.com", department: "기획팀", salary: 4800, joinDate: "2019-11-20", status: "재직" },
  { id: 4, name: "정소영", email: "jung@example.com", department: "마케팅팀", salary: 4200, joinDate: "2022-01-10", status: "휴직" },
  { id: 5, name: "최준혁", email: "choi@example.com", department: "개발팀", salary: 5500, joinDate: "2018-08-05", status: "재직" },
  { id: 6, name: "강미나", email: "kang@example.com", department: "인사팀", salary: 4600, joinDate: "2021-03-22", status: "재직" },
  { id: 7, name: "윤상호", email: "yoon@example.com", department: "개발팀", salary: 5200, joinDate: "2019-05-18", status: "재직" },
  { id: 8, name: "한지은", email: "han@example.com", department: "디자인팀", salary: 4700, joinDate: "2020-09-30", status: "퇴직" },
];

const gridColDefs: ColDef<RowData>[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "name", headerName: "이름", width: 100 },
  { field: "email", headerName: "이메일", flex: 2 },
  { field: "department", headerName: "부서", width: 120 },
  { 
    field: "salary", 
    headerName: "연봉(만원)", 
    width: 120,
    valueFormatter: (p) => p.value?.toLocaleString() ?? "" 
  },
  { field: "joinDate", headerName: "입사일", width: 120 },
  { 
    field: "status", 
    headerName: "상태", 
    width: 100,
    cellStyle: (params) => {
      if (params.value === "퇴직") return { color: "#d32f2f" };
      if (params.value === "휴직") return { color: "#ed6c02" };
      return { color: "#2e7d32" };
    }
  },
];

export const GridDemo = () => {
  return (
    <Stack spacing={3}>
      <DemoCard
        title="AG-Grid Enterprise"
        description="@company/commons/aggrid"
        footer="공통 설정이 적용된 AG-Grid 래퍼 - 정렬, 필터, 리사이즈 지원"
      >
        <AgGridWrapper<RowData>
          rowData={gridRowData}
          columnDefs={gridColDefs}
          height={350}
          theme="quartz"
          pagination
          paginationPageSize={5}
        />
      </DemoCard>
    </Stack>
  );
};
