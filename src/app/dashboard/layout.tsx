import type { Metadata } from "next";
import { AppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { PageContainer } from '@toolpad/core/PageContainer';
import { type Navigation } from "@toolpad/core/AppProvider";
import HomeIcon from '@mui/icons-material/Home';

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

const NAVIGATION: Navigation = [
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
];

export default function Dashboard({ children }: { children: React.ReactNode; }) {
  return (
    <AppProvider
      navigation={NAVIGATION}
    >
      <DashboardLayout>
        <PageContainer>
          {children}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
