import { inter } from "@/utils/fonts";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import { LanguageProvider } from "@/utils/i18n/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body suppressHydrationWarning={true} className={`font-inter text-base ${inter.variable} bg-white text-neutral-700`}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
          <ToastContainer />
        </body>
      </ReduxProvider>
    </html>
  );
}
