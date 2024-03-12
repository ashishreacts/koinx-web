import { Box, Typography } from "@/components/Elements";
import { Info } from "@mui/icons-material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Divider, Grid, LinearProgress } from "@mui/material";

export const CreateLinearBar = ({ value }: { value: number }) => {
  return (
    <>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}
        >
          Performance
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div style={{ width: "7rem" }}>
              <div>Today's Low</div>
              <div>46,930.22</div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <LinearProgress
              color="success"
              variant="determinate"
              value={value}
              sx={{ width: "30rem", mt: 2 }}
            />
            <Box
              sx={{
                position: "absolute",
                left: `calc(${value}% - 12px)`,
                top: "70%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3px",
              }}
            >
              <ArrowDropUpIcon style={{ fontSize: 24, color: "black" }} />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <div style={{ width: "7rem" }}>
              <div>Today's High</div>
              <div>49,343.83</div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div style={{ width: "7rem" }}>
            <div>52W Low</div>
            <div>16,930.22</div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            color="success"
            variant="determinate"
            // value={value}
            sx={{ width: "30rem", mt: 2 }}
          />
        </Grid>
        <Grid item xs={2}>
          <div style={{ width: "7rem" }}>
            <div>52W High</div>
            <div>49,743.83</div>
          </div>
        </Grid>
      </Grid>
      <Typography
        component="h1"
        variant="h6"
        sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}
      >
        Fundamentals <Info />
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Bitcoin Price </span>
          <span>$16,534.88</span>
        </Grid>
        <Divider />
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Market Cap </span>
          <span>$323,507,290,047 </span>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>24th Low / 24th High </span>
          <span>$16,382.07/$16,874.12 </span>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Market Gap Dominance </span>
          <span>38.343% </span>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>7d Low / 7d High</span>
          <span>$16,382.07/$16,874.12</span>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Volume/Market Cap</span>
          <span>0.0718</span>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Trading Volume</span>
          <span>$23,249,202,782</span>
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>All-Time High</span>
            <span>$60,044.77 -75.6%</span>
          </div>
          <span style={{ display: "flex", justifyContent: "flex-end" }}>
            Nov 10 2021(about 1 year)
          </span>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Market Cap Rent</span>
          <span> #1</span>
        </Grid>

        <Grid item xs={6}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>All-Time Low </span>
            <span>$6781 247291X</span>
          </div>
          <span style={{ display: "flex", justifyContent: "flex-end" }}>
            July 06, 2013 (over 9 years)
          </span>
        </Grid>
      </Grid>
    </>
  );
};
