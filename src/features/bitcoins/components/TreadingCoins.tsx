import { CryptIcon, CurrencyCode, Typography } from "@/components/Elements";
import { ArrowDropUp } from "@mui/icons-material";
import { Grid } from "@mui/material";

export const TreadingCoins = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography component="h1" variant="h5">
        Trending Coins (24h)
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            <CryptIcon currencyCode={CurrencyCode.BTC} />
            Bitcoin (BTC)
          </span>
          <span
            style={{
              color: "green",
              backgroundColor: "rgb(98, 247, 84, 0.16)",
            }}
          >
            <ArrowDropUp sx={{ verticalAlign: "middle" }} />
            5.26%
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            <CryptIcon currencyCode={CurrencyCode.BTC} />
            Bitcoin (BTC)
          </span>
          <span
            style={{
              color: "green",
              backgroundColor: "rgb(98, 247, 84, 0.16)",
            }}
          >
            <ArrowDropUp sx={{ verticalAlign: "middle" }} />
            5.26%
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            <CryptIcon currencyCode={CurrencyCode.BTC} />
            Bitcoin (BTC)
          </span>
          <span
            style={{
              color: "green",
              backgroundColor: "rgb(98, 247, 84, 0.16)",
            }}
          >
            <ArrowDropUp sx={{ verticalAlign: "middle" }} />
            5.26%
          </span>
        </Grid>
      </Grid>
    </div>
  );
};
