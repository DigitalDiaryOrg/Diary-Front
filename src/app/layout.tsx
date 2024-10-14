import "../styles/global.css";
import "../styles/background.css";

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
      <body>
        <div className="background">{children}</div>
      </body>
    </html>
  );
}
