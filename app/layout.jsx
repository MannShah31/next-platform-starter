import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Dagger Garments Private Limited - NBFC',
        default: 'Dagger Garments Private Limited - NBFC Financial Services'
    },
    description: 'Dagger Garments Private Limited is a trusted Non-Banking Financial Company offering business loans, working capital finance, and trade financing solutions for garment industry businesses.',
    keywords: ['NBFC', 'business loans', 'garment finance', 'working capital', 'trade financing', 'Dagger Garments']
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-slate-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
