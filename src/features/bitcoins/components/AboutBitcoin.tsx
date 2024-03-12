import { Box, Button, Typography } from "@/components/Elements";
import { ArrowForward } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
} from "@mui/material";

export const AboutBitcoin = () => {
  return (
    <Container sx={{ p: 1 }}>
      <Typography component="h1" variant="h5">
        About Bitcoin
      </Typography>
      <Typography component="h6" variant="h6">
        What is Bitcoin?
      </Typography>
      <Typography component="p" sx={{ mb: 1 }} align="justify">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </Typography>
      <Divider />
      <Typography component="h6" variant="h6" sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography component="p" align="justify" sx={{ mb: 1 }}>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
        <br />
        <br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br />
        <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </Typography>
      <Divider />
      <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
        Already Holding Bitcoin?
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ display: "flex", background: "rgb(180, 175, 255)" }}>
            <CardMedia
              component="img"
              sx={{ width: 120, p: 1 }}
              image="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFOX6YNCDJIPFOCR2YQ2OUC5GY.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Calculate your Profits
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "white", color: "inherit" }}
                >
                  Check Now <ArrowForward />
                </Button>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ display: "flex", background: "rgb(231,60,100) " }}>
            <CardMedia
              component="img"
              sx={{ width: 120, p: 1 }}
              image="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFOX6YNCDJIPFOCR2YQ2OUC5GY.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Calculate your tax liability
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "white", color: "inherit" }}
                >
                  Check Now <ArrowForward />
                </Button>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Divider />

      <Typography component="p" sx={{ mt: 1 }} align="justify">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </Typography>
    </Container>
  );
};
