import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container bg-bgColor mx-auto px-12 min-h-screen flex flex-col justify-between
                        lg:px-10 lg:w-1536 
                        xl:w-1366 
                        2xl:w-1280 
                        3xl:px-5 3xl:w-1024
                        4xl:w-768 
                        5xl:w-640 
                        6xl:w-475 
                        7xl:w-380">        
                        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
