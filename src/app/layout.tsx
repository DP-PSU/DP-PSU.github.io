import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheap PSU Transfer Credit",
  description:
    "Cheap Transfer Credit for PSU students (ranging from free courses to courses that cost less than 500 bucks). These credit sources include Sophia Learning, Thomas Edison University, CLEP, DSST, Study.com, Arizona State University, and American Dream Academy.",
  keywords: ["transfer", "transfer credit", "cheap", "penn state", "psu"],
  
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
