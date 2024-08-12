import "../styles/global.css";

export const metadata = {
  title: "Diary",
  description: "Temporary name",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
