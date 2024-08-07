import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from "react-bootstrap";
import { vazir } from '@/utils/fonts';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import NextAuthProvider from '@/providers/NextAuthProvider';

export const metadata = {
  title: "شهر فست فود",
  description: "منو شهر فست فود",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang = "fa" dir = "rtl">
      <body className = {`${vazir.className} bg-fast-food`}>
        <NextAuthProvider>
          <ThemeProvider dir = "rtl">
            <Toaster />
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
