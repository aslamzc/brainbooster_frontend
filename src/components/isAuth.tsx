"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

//client side auth guard
export default function isAuth(Component: any) {
  return function IsAuth() {

    const accessToken = Cookies.get("accessToken");

    useEffect(() => {
      if (!accessToken) {
        return redirect("/");
      }
    }, []);

    if (!accessToken) {
      return null;
    }

    return Component;
  };
}