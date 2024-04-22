import "~/styles/globals.css";

import { Inter } from "next/font/google";
import NavBar from "./_components/layout/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "WhatsTheWord",
  description: "Created by GLabs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NavBar>
          {children}
        </NavBar>
      </body>
    </html>
  );
}
