import { Box, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Semester Project
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By SP20-BCS-013
        </Typography>
      </Box>
    </div>
  );
}
