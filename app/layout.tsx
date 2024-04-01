import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ConvexClientProvider } from "@/components/provider/covex-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip keeper",
  description: "여행 일정과 여행 기록을 통해 여행을 더 즐겁게 추억해 보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            storageKey="trip-keeper-theme"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
