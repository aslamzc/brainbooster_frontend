import { ReactNode } from "react";
import { AppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { PageContainer } from '@toolpad/core/PageContainer';
import { type Navigation } from "@toolpad/core/AppProvider";
import QuizIcon from '@mui/icons-material/Quiz';
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';

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
    segment: 'dashboard/create-quiz',
    title: 'Create Quiz',
    icon: <AddIcon />,
  },
  {
    kind: 'divider',
  },
];

export default function Layout({ children }: { children: ReactNode; }) {
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
