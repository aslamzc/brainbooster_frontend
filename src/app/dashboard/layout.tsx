import { ReactNode } from "react";
import { AppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { type Navigation } from "@toolpad/core/AppProvider";
import QuizIcon from '@mui/icons-material/Quiz';
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import Toolbar from "./Toolbar";

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'dashboard/quiz',
    title: 'Quiz List',
    icon: <QuizIcon />,
  },
  {
    segment: 'dashboard/quiz/create',
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
      <DashboardLayout
        slots={{
          toolbarActions: Toolbar
        }}
      >
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}
