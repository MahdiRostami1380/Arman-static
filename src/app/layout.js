import "./globals.css";

export const metadata = {
  title: "آرمان",
  description: "ستاد طرح شهید آرمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
