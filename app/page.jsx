import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-16">
            {/* HERO SECTION */}
            <section className="max-w-4xl">
                <h1 className="mb-4 text-4xl font-bold">
                    Structured Financing & Advisory Solutions for India’s Enterprises
                </h1>

                <p className="mb-6 text-lg">
                    Dagger Garments Private Limited is an RBI registered Non-Banking Financial Company (NBFC)
                    providing Indian Rupee denominated structured lending and financial advisory solutions
                    to SMEs, corporates, and individuals across India.
                </p>

                <div className="flex gap-4">
                    <Link href="/solutions" className="btn btn-lg">
                        Explore Our Solutions
                    </Link>

                    <Link href="/contact" className="btn btn-outline btn-lg">
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* ABOUT SNAPSHOT */}
            <section className="max-w-4xl">
                <h2 className="mb-3 text-2xl font-semibold">
                    About Us
                </h2>

                <p>
                    Dagger Garments Private Limited is a Non-Deposit Taking Non-Banking Financial Company
                    registered with the Reserve Bank of India. The Company is engaged in providing
                    secured and unsecured structured term financing solutions and financial advisory
                    services across investment banking, corporate finance, project finance, and
                    trade finance.
                </p>
            </section>

            {/* SERVICES */}
            <section className="max-w-4xl">
                <h2 className="mb-3 text-2xl font-semibold">
                    Our Services
                </h2>

                <h3 className="mt-4 font-semibold">
                    Lending Solutions
                </h3>
                <ul className="list-disc pl-6">
                    <li>Indian Rupee denominated structured term loans</li>
                    <li>Secured and unsecured financing</li>
                    <li>Business and retail loans</li>
                    <li>Lending against tangible collateral and operating cash flows</li>
                </ul>

                <h3 className="mt-6 font-semibold">
                    Advisory Services
                </h3>
                <ul className="list-disc pl-6">
                    <li>Investment Banking advisory</li>
                    <li>Corporate Finance</li>
                    <li>Project Finance</li>
                    <li>Trade Finance advisory</li>
                </ul>
            </section>

            {/* COMPLIANCE */}
            <section className="max-w-4xl">
                <h2 className="mb-3 text-2xl font-semibold">
                    Compliance & Governance
                </h2>

                <p>
                    The Company operates under the regulatory framework prescribed by the Reserve Bank
                    of India and follows applicable laws, guidelines, and best practices to ensure
                    transparency, governance, and responsible lending.
                </p>
            </section>
        </div>
    );
}

