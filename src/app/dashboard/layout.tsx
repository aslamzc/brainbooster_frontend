import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div>
      <h2>sdsdsdsdsdsdsdsd</h2>
      {children}
    </div>
  );
}
