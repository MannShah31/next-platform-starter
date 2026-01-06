import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-t border-slate-700/50">
            <div className="grid md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-primary">DG</span>
                        <span className="text-sm font-medium text-white">
                            Dagger Garments<br />
                            <span className="text-xs text-slate-400">Private Limited - NBFC</span>
                        </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                        A trusted Non-Banking Financial Company registered with the Reserve Bank of India,
                        specializing in financial solutions for the garment industry.
                    </p>
                    <p className="text-xs text-slate-500">
                        CIN: U65910MH2014PTC123456<br />
                        Registered NBFC with RBI
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="text-slate-400 hover:text-primary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-slate-400 hover:text-primary">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/apply" className="text-slate-400 hover:text-primary">
                                Apply for Loan
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-slate-400 hover:text-primary">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Contact</h4>
                    <div className="space-y-2 text-sm text-slate-400">
                        <p>
                            4th Floor, Trade Tower<br />
                            Lower Parel, Mumbai - 400013<br />
                            Maharashtra, India
                        </p>
                        <p>
                            Phone: +91 22 4567 8900
                        </p>
                        <p>
                            Email: info@daggergarments.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-slate-700/50 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
                <p>
                    &copy; {new Date().getFullYear()} Dagger Garments Private Limited. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary">Terms & Conditions</Link>
                    <Link href="#" className="hover:text-primary">Grievance Redressal</Link>
                </div>
            </div>
        </footer>
    );
}
