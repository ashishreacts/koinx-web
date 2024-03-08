import { ContentLayout } from "@/components/Layout";
import { CreateChart } from "../components/CreateChart";
import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Chart = () => {
  return (
    <ContentLayout title="Chart">
      <div>
        <div>
          <Grid container sx={{ width: "90rem" }} spacing={2}>
            <Grid item xs={6}>
              <Paper>
                <CreateChart />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 2</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 1</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 2</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 1</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 2</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 1</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Content 1 - Column 2</Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </ContentLayout>
  );
};
