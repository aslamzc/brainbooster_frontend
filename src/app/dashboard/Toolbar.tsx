"use client";
import Cookies from "js-cookie";
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { SignOutButton } from '@toolpad/core/Account';

export default function Toolbar() {
  const logout = () => {
    Cookies.remove('accessToken');
    window.location.href = "/";
  };
  return (
    <>
      <ThemeSwitcher />
      <SignOutButton
        variant="outlined"
        disabled={false}
        onClick={logout}
      />
    </>
  );
}
