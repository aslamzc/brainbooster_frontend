"use client";
import { Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Typography variant="h6">Welcome {localStorage.getItem('userName')}</Typography>
    </>
  );
}
