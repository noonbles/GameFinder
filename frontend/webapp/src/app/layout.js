import "./globals.css";

export const metadata = {
  title: "Game Stats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}