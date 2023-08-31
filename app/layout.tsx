"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={`bg-sky-100 dark:text-slate-200 dark:bg-sky-950 `}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
