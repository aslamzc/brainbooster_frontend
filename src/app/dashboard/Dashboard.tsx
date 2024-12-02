"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [name, setName] = useState<string | null>();

  useEffect(() => {
    const getName = localStorage.getItem('userName');
    setName(getName);
  }, []);
  return (
    <>
      {!!name
        ?
        <Typography variant="h6">Welcome {name}</Typography>
        :
        <Box className="flex items-start justify-center h-screen flex-col">
          <h1 className="text-center">Loading...</h1>
        </Box>
      }
    </>
  );
}
