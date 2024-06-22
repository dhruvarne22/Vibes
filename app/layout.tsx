import type { Metadata } from "next";
import "./globals.css";

import UserProvider from "./context/user";
import AllOverlays from "./components/AllOverlay";



export const metadata: Metadata = {
  title: "Vibes",
  description: "Get Into Your Vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <UserProvider>
          <body >
    
    <AllOverlays/>
    {children}</body>
</UserProvider>
    
    </html>
  );
}
