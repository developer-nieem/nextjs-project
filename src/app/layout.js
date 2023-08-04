import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/footer/footer";
import ThemeProvider from "../../context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js full stack project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} bg-black text-white `}>
      
      
        <div className="w-[1200px] m-auto">
          <ThemeProvider><Navbar></Navbar></ThemeProvider>
         
          {children}

          <Footer></Footer>
        </div>
        
      
        </body>
      
    </html>
  );
}
