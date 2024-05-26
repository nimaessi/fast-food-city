import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from "react-bootstrap";
import { vazir } from '@/utils/fonts';
import "./globals.css";
import Footer from '@/layout/Footer';
export const metadata = {
  title: "شهر فست فود",
  description: "منو شهر فست فود",
};

export default function RootLayout({ children }) {
  return (
    <html lang = "fa" dir = "rtl">
      <body className = {`${vazir.className} bg-fast-food`}>
        <ThemeProvider dir = "rtl">
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
