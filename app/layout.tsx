import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACP - Trung tâm luyện thi học sinh giỏi tin học",
  description: "Trung tâm ACP với đội ngũ giảng viên nhiệt tình, chất lượng, tự hào là một trong những trung tâm hàng đầu Việt Nam về luyện thi OLP, HSG môn Tin học các cấp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
