import { Button, Typography } from "@/components/Elements";
import { ArrowForward } from "@mui/icons-material";

export const SidebarContent = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Typography
        component="h1"
        variant="h5"
        sx={{ color: "white", mb: 1 }}
        align="center"
      >
        Get Started with KoinX for FREE
      </Typography>
      <Typography component="p" sx={{ color: "white" }} align="center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </Typography>
      <img
        src="https://co-kes.com/wp-content/uploads/2022/11/make-payment.png"
        style={{
          width: "15rem",
          marginLeft: "3.3rem",
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "inherit",
          ml: 6,
          mb: 1,
          textTransform: "initial",
        }}
      >
        Get Started For FREE <ArrowForward />
      </Button>
    </div>
  );
};
