import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';
export const metadata = {
  title: 'Modern Black Navbar',
  description: 'Minimal and professional navbar with Next.js & Tailwind 4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-zinc-950 text-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}