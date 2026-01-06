import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Services', href: '/services' },
    { linkText: 'Apply Now', href: '/apply' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="flex items-center gap-2 no-underline hover:opacity-100">
                <span className="text-2xl font-bold text-primary">DG</span>
                <span className="hidden sm:inline text-sm font-medium text-white">
                    Dagger Garments<br />
                    <span className="text-xs text-slate-400">Private Limited - NBFC</span>
                </span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={`inline-flex px-1.5 py-1 sm:px-3 sm:py-2 ${
                                    item.linkText === 'Apply Now'
                                        ? 'btn text-sm no-underline'
                                        : ''
                                }`}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
