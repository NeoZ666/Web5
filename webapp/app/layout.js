import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MUSICHAIN WITH WEB5",
  description: "Great technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkGray text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
