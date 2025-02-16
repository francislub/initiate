import Footer from '../components/footer';
import Navigation from '../components/navigation';
import TopBar from '../components/top-bar';
import './css/globals.css';
import './css/style.css';


export const metadata = {
    title: 'INITIATE',
    description: 'Developed by Francis',
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={` antialiased`}
        >
          <TopBar />
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
  }