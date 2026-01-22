import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Layout } from "@/components/Layout";

// Demo components
import { ApiDemo } from "@/components/demos/ApiDemo";
import { ModalDemo } from "@/components/demos/ModalDemo";
import { GridDemo } from "@/components/demos/GridDemo";
import { CalendarDemo } from "@/components/demos/CalendarDemo";
import { TimelineDemo } from "@/components/demos/TimelineDemo";
import { ChartDemo } from "@/components/demos/ChartDemo";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
  </div>
);

const tabs = [
  { label: "API & Toast", component: ApiDemo },
  { label: "Modal", component: ModalDemo },
  { label: "AG-Grid", component: GridDemo },
  { label: "Calendar", component: CalendarDemo },
  { label: "Timeline", component: TimelineDemo },
  { label: "Charts", component: ChartDemo },
];

export const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Layout
      header="TEST APP B 데모"
      subtitle="각 탭에서 공통 패키지의 컴포넌트들을 확인할 수 있어요."
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={(_, newValue) => setTabIndex(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tabIndex} index={index}>
          <tab.component />
        </TabPanel>
      ))}
    </Layout>
  );
};
