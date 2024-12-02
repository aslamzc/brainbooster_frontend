"use client";
import Cookies from "js-cookie";
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { SignOutButton } from '@toolpad/core/Account';
import { Button } from "@mui/material";

export default function Toolbar() {
  const logout = () => {
    Cookies.remove('accessToken');
    localStorage.removeItem('userName');
    window.location.href = "/signin";
  };
  return (
    <>
      <ThemeSwitcher />
      <Button
        variant="outlined"
        size="small"
        href="http://localhost:8000/admin/profile"
      >
        Profile
      </Button>
      <SignOutButton
        variant="outlined"
        disabled={false}
        onClick={logout}
      />
    </>
  );
}
