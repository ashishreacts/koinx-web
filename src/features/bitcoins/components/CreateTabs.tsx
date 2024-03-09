import { Box, Typography } from "@/components/Elements";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import { CreateLinearBar } from "./CreateLinearBar";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const CreateTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Fundamentals" {...a11yProps(1)} />
          <Tab label="News Insights" {...a11yProps(2)} />
          <Tab label="Sentiments" {...a11yProps(3)} />
          <Tab label="Team" {...a11yProps(4)} />
          <Tab label="Technicals" {...a11yProps(5)} />
          <Tab label="Tokenomics" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CreateLinearBar value={0} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Fundamentals
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        News Insights
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Sentiments
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Team
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Technicals
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Tokenomics
      </CustomTabPanel>
    </Box>
  );
};
