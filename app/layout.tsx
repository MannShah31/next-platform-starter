import '../styles/globals.css';
import { Header } from '../components/header';
import React from 'react';

export const metadata = {
    title: {
        template: '%s | Dagger Garments Private Limited',
        default: 'Dagger Garments Private Limited'
    },
    description:
        'Dagger Garments Private Limited is an RBI registered Non-Banking Financial Company (NBFC) providing structured financing and advisory solutions to SMEs, corporates, and individuals in India.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>

                        <footer className="mt-16 border-t border-white/20 pt-6 text-sm text-white/80">
                            <div className="max-w-5xl mx-auto">
                                <p className="font-semibold text-white">
                                    Dagger Garments Private Limited
                                </p>
                                <p className="mt-2">
                                    Non-Banking Financial Company (NBFC) registered with the
                                    Reserve Bank of India under the category of
                                    Non-Deposit Taking NBFC.
                                </p>
                                <p className="mt-2">
                                    CIN: <span className="opacity-80">[Insert CIN Here]</span>
                                </p>
                                <p className="mt-2">
                                    Registered Office:{' '}
                                    <span className="opacity-80">
                                        [Insert Registered Office Address Here]
                                    </span>
                                </p>
                                <p className="mt-2">
                                    Email:{' '}
                                    <a
                                        href="mailto:info@daggergarments.com"
                                        className="underline"
                                    >
                                        info@daggergarments.com
                                    </a>
                                </p>
                                <p className="mt-4 text-xs text-white/60">
                                    Disclaimer: The Company does not accept public deposits
                                    and operates in accordance with applicable laws,
                                    regulations, and guidelines issued by the Reserve Bank
                                    of India.
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </body>
        </html>
    );
}
