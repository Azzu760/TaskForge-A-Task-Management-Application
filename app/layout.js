import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskForge - Shape Your Productivity",
  description:
    "TaskForge transforms your approach to task management with a dynamic and engaging interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
