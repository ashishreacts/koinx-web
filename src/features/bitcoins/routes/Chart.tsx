import { ContentLayout } from "@/components/Layout";
import { Grid, Paper, styled } from "@mui/material";
import { AboutBitcoin } from "../components/AboutBitcoin";
import { CreateChart } from "../components/CreateChart";
import { CreateTabs } from "../components/CreateTabs";
import { SidebarContent } from "../components/SidebarContent";
import { Team } from "../components/Team";
import { Tokenomics } from "../components/Tokenomics";
import { TreadingCoins } from "../components/TreadingCoins";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2029" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Chart = () => {
  return (
    <ContentLayout title="Chart">
      <div style={{ width: "93.9vw" }}>
        <Grid container sx={{ width: "90rem" }} spacing={2}>
          <Grid item xs={9}>
            <Paper>
              <CreateChart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ backgroundColor: "#006CFF" }}>
              <SidebarContent />
            </Paper>
            <Paper sx={{ mt: 2 }}>
              <TreadingCoins />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <CreateTabs />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Item>Content 1 - Column 2</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>Content 1 - Column 1</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Content 1 - Column 2</Item>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <AboutBitcoin />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Item>Content 1 - Column 2</Item>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <Tokenomics />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Item>Content 1 - Column 2</Item>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <Team />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Item>Content 1 - Column 2</Item>
          </Grid>
        </Grid>
      </div>
    </ContentLayout>
  );
};
