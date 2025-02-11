import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY
  
  return (
    <html lang="en">

      <body className={inter.className}>
        
        {children}
        
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&v=weekl`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
