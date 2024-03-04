import { Suspense } from "react";
import "./globals.css";
import Nav from "../../components/nav";
import Header from "../../components/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full w-full bg-blue-50">
      <body className="flex flex-row justify-between w-full h-full">
        <Suspense>
          <Nav></Nav>
        </Suspense>
        <div className="flex flex-col flex-grow">
          <Header></Header>
          <div className="border flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
