import Link from 'next/link';
import { Card } from '../components/Card';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section className="text-center py-8">
                <h1 className="mb-6">Dagger Garments Private Limited</h1>
                <p className="text-xl text-slate-300 mb-4">Your Trusted NBFC Partner for Garment Industry Finance</p>
                <p className="mb-8 text-lg max-w-3xl mx-auto">
                    Empowering garment businesses with tailored financial solutions. We provide quick, hassle-free
                    business loans, working capital finance, and trade financing to help your business grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/apply" className="btn btn-lg sm:min-w-64">
                        Apply for a Loan
                    </Link>
                    <Link href="/services" className="btn btn-lg sm:min-w-64 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-content">
                        Our Services
                    </Link>
                </div>
            </section>

            {/* Key Features Section */}
            <section>
                <h2 className="text-center mb-8">Why Choose Dagger Garments NBFC?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card title="Quick Approvals">
                        <p>Get loan approvals within 48-72 hours. Our streamlined process ensures minimal documentation and fast disbursement.</p>
                    </Card>
                    <Card title="Industry Expertise">
                        <p>With deep understanding of the garment industry, we offer customized financing solutions that match your business cycles.</p>
                    </Card>
                    <Card title="Competitive Rates">
                        <p>Enjoy attractive interest rates and flexible repayment options designed to support your business growth without straining cash flow.</p>
                    </Card>
                </div>
            </section>

            {/* Services Overview */}
            <section>
                <h2 className="text-center mb-8">Our Financial Products</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card title="Business Loans">
                        <p>Unsecured and secured business loans from Rs. 5 Lakhs to Rs. 5 Crores for expansion, equipment purchase, and operational needs.</p>
                        <Link href="/services#business-loans" className="text-primary mt-2 inline-block">Learn More →</Link>
                    </Card>
                    <Card title="Working Capital Finance">
                        <p>Short-term financing solutions to manage inventory, payroll, and day-to-day operational expenses during peak seasons.</p>
                        <Link href="/services#working-capital" className="text-primary mt-2 inline-block">Learn More →</Link>
                    </Card>
                    <Card title="Trade Finance">
                        <p>Letter of credit, bill discounting, and export/import financing to facilitate domestic and international trade.</p>
                        <Link href="/services#trade-finance" className="text-primary mt-2 inline-block">Learn More →</Link>
                    </Card>
                    <Card title="Equipment Financing">
                        <p>Finance for machinery, sewing equipment, and technology upgrades with flexible EMI options up to 60 months.</p>
                        <Link href="/services#equipment-finance" className="text-primary mt-2 inline-block">Learn More →</Link>
                    </Card>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-slate-800/50 rounded-lg p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-bold text-primary">500+</p>
                        <p className="text-slate-300">Businesses Funded</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-primary">Rs. 100Cr+</p>
                        <p className="text-slate-300">Loans Disbursed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-primary">98%</p>
                        <p className="text-slate-300">Customer Satisfaction</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-primary">10+</p>
                        <p className="text-slate-300">Years of Trust</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-8">
                <h2 className="mb-4">Ready to Grow Your Business?</h2>
                <p className="mb-6 text-lg text-slate-300">
                    Apply today and get a decision within 48 hours. Our team is here to help you every step of the way.
                </p>
                <Link href="/contact" className="btn btn-lg">
                    Contact Us Today
                </Link>
            </section>
        </div>
    );
}
