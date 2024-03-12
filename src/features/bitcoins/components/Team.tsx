import { Box, Typography } from "@/components/Elements";
import { Card, CardContent, CardMedia } from "@mui/material";

export const Team = () => {
  const Data = [
    {
      name: "John Doe",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Bob Johnson",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div style={{ padding: "1rem" }}>
      <Typography component="h1" variant="h5">
        Team
      </Typography>
      <Typography component="p" sx={{ mb: 1 }} align="justify">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </Typography>
      {Data.map((data) => (
        <Card sx={{ display: "flex", mt: 1, background: "#e8f4fd" }}>
          <div>
            <CardMedia
              component="img"
              sx={{ width: 120, p: 1 }}
              image={data.image}
              alt="Live from space album cover"
            />
            <Typography component="h3" variant="h6">
              {data.name}
            </Typography>
            <Typography component="p" sx={{ width: "10rem" }}>
              {data.designation}
            </Typography>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="p" sx={{ mb: 1 }} align="justify">
                {data.content}
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
      ))}
    </div>
  );
};
