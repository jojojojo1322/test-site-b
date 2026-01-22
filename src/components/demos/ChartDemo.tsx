import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  ComposedChart,
  FunnelChart,
  Funnel,
  Treemap,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LabelList,
} from "recharts";

// 공통 색상
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

// 기본 데이터
const lineBarData = [
  { name: "1월", sales: 4000, profit: 2400, cost: 1600 },
  { name: "2월", sales: 3000, profit: 1398, cost: 1602 },
  { name: "3월", sales: 2000, profit: 9800, cost: 800 },
  { name: "4월", sales: 2780, profit: 3908, cost: 1200 },
  { name: "5월", sales: 1890, profit: 4800, cost: 900 },
  { name: "6월", sales: 2390, profit: 3800, cost: 1100 },
];

const pieData = [
  { name: "개발팀", value: 400 },
  { name: "디자인팀", value: 300 },
  { name: "기획팀", value: 200 },
  { name: "마케팅팀", value: 278 },
  { name: "인사팀", value: 189 },
];

const radarData = [
  { subject: "성능", A: 120, B: 110, fullMark: 150 },
  { subject: "안정성", A: 98, B: 130, fullMark: 150 },
  { subject: "확장성", A: 86, B: 130, fullMark: 150 },
  { subject: "보안", A: 99, B: 100, fullMark: 150 },
  { subject: "사용성", A: 85, B: 90, fullMark: 150 },
  { subject: "문서화", A: 65, B: 85, fullMark: 150 },
];

const radialBarData = [
  { name: "18-24", uv: 31.47, fill: "#8884d8" },
  { name: "25-29", uv: 26.69, fill: "#83a6ed" },
  { name: "30-34", uv: 15.69, fill: "#8dd1e1" },
  { name: "35-39", uv: 8.22, fill: "#82ca9d" },
  { name: "40+", uv: 7.63, fill: "#a4de6c" },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const funnelData = [
  { name: "방문", value: 5000, fill: "#8884d8" },
  { name: "관심", value: 4500, fill: "#83a6ed" },
  { name: "장바구니", value: 3000, fill: "#8dd1e1" },
  { name: "결제시도", value: 1500, fill: "#82ca9d" },
  { name: "구매완료", value: 1000, fill: "#a4de6c" },
];

const treemapData = [
  { name: "개발", size: 3000, fill: "#8884d8" },
  { name: "디자인", size: 2500, fill: "#82ca9d" },
  { name: "마케팅", size: 2000, fill: "#ffc658" },
  { name: "영업", size: 1800, fill: "#ff7300" },
  { name: "인사", size: 1200, fill: "#00C49F" },
  { name: "재무", size: 1000, fill: "#FFBB28" },
];

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard = ({ title, children }: ChartCardProps) => (
  <Paper elevation={0} sx={{ p: 2, border: "1px solid #E5E7EB", borderRadius: 2, height: "100%" }}>
    <Typography variant="subtitle2" gutterBottom color="text.secondary">
      {title}
    </Typography>
    <div style={{ width: "100%", height: 250 }}>{children}</div>
  </Paper>
);

export const ChartDemo = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Recharts 차트 샘플</Typography>
      <Typography variant="body2" color="text.secondary">
        @company/commons/chart에서 제공하는 Recharts 기반 차트 컴포넌트들입니다.
      </Typography>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="LineChart">
            <ResponsiveContainer>
              <LineChart data={lineBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Bar Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="BarChart">
            <ResponsiveContainer>
              <BarChart data={lineBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Area Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="AreaChart">
            <ResponsiveContainer>
              <AreaChart data={lineBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Area type="monotone" dataKey="profit" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Composed Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="ComposedChart (Line + Bar + Area)">
            <ResponsiveContainer>
              <ComposedChart data={lineBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="cost" fill="#ffc658" stroke="#ffc658" fillOpacity={0.3} />
                <Bar dataKey="profit" barSize={20} fill="#82ca9d" />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Pie Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="PieChart">
            <ResponsiveContainer>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Radar Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="RadarChart">
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Tooltip />
                <Legend />
                <Radar name="제품 A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="제품 B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Radial Bar Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="RadialBarChart">
            <ResponsiveContainer>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={15}
                data={radialBarData}
              >
                <RadialBar
                  label={{ position: "insideStart", fill: "#fff" }}
                  background
                  dataKey="uv"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Scatter Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="ScatterChart">
            <ResponsiveContainer>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" name="X" />
                <YAxis type="number" dataKey="y" name="Y" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="데이터" data={scatterData} fill="#8884d8">
                  {scatterData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Funnel Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="FunnelChart">
            <ResponsiveContainer>
              <FunnelChart>
                <Tooltip />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>

        {/* Treemap */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard title="Treemap">
            <ResponsiveContainer>
              <Treemap
                data={treemapData}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
              >
                <Tooltip />
              </Treemap>
            </ResponsiveContainer>
          </ChartCard>
        </Grid>
      </Grid>
    </Stack>
  );
};
