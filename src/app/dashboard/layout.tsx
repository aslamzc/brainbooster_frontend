import type { Metadata } from "next";
import { AppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { PageContainer } from '@toolpad/core/PageContainer';
import { type Navigation } from "@toolpad/core/AppProvider";
import QuizIcon from '@mui/icons-material/Quiz';
import Image, { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Dashboard | BrainBooster",
  description: "Dashboard",
};

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'dashboard/my-quiz',
    title: 'My Quiz',
    icon: <QuizIcon />,
  },
  {
    kind: 'divider',
  },
];

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: '',
        logo: <Image src="/Logo.png" alt="logo" width={180} height={100} />
      }}
    >
      <DashboardLayout>
        <PageContainer>
          {children}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
