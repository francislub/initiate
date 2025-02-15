import './css/globals.css';
import './css/style.css';
import Head from 'next/head';

export const metadata = {
    title: 'INITIATE',
    description: 'Developed by Francis',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                { children }
            </body>
        </html>
    )
}