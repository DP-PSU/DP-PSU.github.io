import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Cheap PSU Transfer Credit",
  description:
    "Cheap Transfer Credit for PSU students (ranging from free courses to courses that cost less than 500 bucks). These credit sources include Sophia Learning, Thomas Edison University, CLEP, DSST, Study.com, Arizona State University, and American Dream Academy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
