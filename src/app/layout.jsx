
import "./globals.css";
import Footer from "./footer/footer";

import localFont from "next/font/local";
const myFont = localFont({
  src: "./font/InterTight-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </head>
      <body className={myFont.className}>
        <div className="w-[100%] bgTheme">

        
        {children}
        <Footer/>

        </div>
      </body>
    </html>
  );
}



