import Link from 'next/link';
import { Card } from 'components/Card';

export const metadata = {
    title: 'Our Services',
    description: 'Explore our comprehensive financial products including business loans, working capital finance, trade finance, and equipment financing for garment businesses.'
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6">Our Financial Services</h1>
                <p className="text-xl text-slate-300">
                    Comprehensive financing solutions designed specifically for the garment industry.
                    From working capital to equipment financing, we have you covered.
                </p>
            </section>

            {/* Business Loans */}
            <section id="business-loans">
                <Card>
                    <div className="space-y-4">
                        <h2 className="text-neutral-900">Business Loans</h2>
                        <p>
                            Flexible secured and unsecured business loans to help you expand operations, purchase raw materials,
                            or manage large orders. Our business loans are designed with the garment industry's unique needs in mind.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Loan Amount</h3>
                                <p className="text-neutral-700">Rs. 5 Lakhs to Rs. 5 Crores</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Tenure</h3>
                                <p className="text-neutral-700">12 to 60 months</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Interest Rate</h3>
                                <p className="text-neutral-700">Starting from 12% p.a.</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Processing Time</h3>
                                <p className="text-neutral-700">48-72 hours</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mt-4">Eligibility</h3>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            <li>Business vintage of 2+ years</li>
                            <li>Annual turnover of Rs. 50 Lakhs+</li>
                            <li>Valid GST registration</li>
                            <li>Good credit history (CIBIL 650+)</li>
                        </ul>
                    </div>
                </Card>
            </section>

            {/* Working Capital Finance */}
            <section id="working-capital">
                <Card>
                    <div className="space-y-4">
                        <h2 className="text-neutral-900">Working Capital Finance</h2>
                        <p>
                            Keep your operations running smoothly with our working capital solutions. Perfect for managing seasonal
                            inventory builds, payroll during lean periods, or bridging payment cycles from buyers.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Facility Amount</h3>
                                <p className="text-neutral-700">Rs. 10 Lakhs to Rs. 3 Crores</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Tenure</h3>
                                <p className="text-neutral-700">3 to 12 months (renewable)</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Interest Rate</h3>
                                <p className="text-neutral-700">Starting from 14% p.a.</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Collateral</h3>
                                <p className="text-neutral-700">Inventory/Receivables backed</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mt-4">Key Benefits</h3>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            <li>Revolving credit facility</li>
                            <li>Pay interest only on utilized amount</li>
                            <li>Quick top-up facility for existing customers</li>
                            <li>Seasonal credit line adjustments</li>
                        </ul>
                    </div>
                </Card>
            </section>

            {/* Trade Finance */}
            <section id="trade-finance">
                <Card>
                    <div className="space-y-4">
                        <h2 className="text-neutral-900">Trade Finance</h2>
                        <p>
                            Facilitate your domestic and international trade with our comprehensive trade finance solutions.
                            From letter of credit to bill discounting, we help you maintain healthy cash flow while fulfilling orders.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Letter of Credit</h3>
                                <p className="text-neutral-700">LC issuance and confirmation for import/export</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Bill Discounting</h3>
                                <p className="text-neutral-700">Immediate cash against receivables</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Export Finance</h3>
                                <p className="text-neutral-700">Pre and post-shipment credit</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mt-4">We Support</h3>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            <li>Raw material imports (fabric, accessories)</li>
                            <li>Finished goods exports</li>
                            <li>Domestic B2B transactions</li>
                            <li>Multi-currency transactions</li>
                        </ul>
                    </div>
                </Card>
            </section>

            {/* Equipment Financing */}
            <section id="equipment-finance">
                <Card>
                    <div className="space-y-4">
                        <h2 className="text-neutral-900">Equipment Financing</h2>
                        <p>
                            Upgrade your manufacturing capabilities with our equipment financing solutions. Whether you need new
                            sewing machines, cutting equipment, or complete production line setup, we can help finance it.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Financing Amount</h3>
                                <p className="text-neutral-700">Up to 90% of equipment cost</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Tenure</h3>
                                <p className="text-neutral-700">24 to 60 months</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Interest Rate</h3>
                                <p className="text-neutral-700">Starting from 11% p.a.</p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Down Payment</h3>
                                <p className="text-neutral-700">Minimum 10%</p>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mt-4">Equipment Types Covered</h3>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            <li>Industrial sewing machines (single needle, overlock, flatlock)</li>
                            <li>Cutting machines and CAD systems</li>
                            <li>Embroidery and printing equipment</li>
                            <li>Washing and finishing machinery</li>
                            <li>Quality control equipment</li>
                        </ul>
                    </div>
                </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center py-8 bg-slate-800/50 rounded-lg">
                <h2 className="mb-4">Ready to Apply?</h2>
                <p className="mb-6 text-lg text-slate-300">
                    Our team is ready to help you find the right financing solution for your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/apply" className="btn btn-lg">
                        Apply Now
                    </Link>
                    <Link href="/contact" className="btn btn-lg bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-content">
                        Talk to an Expert
                    </Link>
                </div>
            </section>
        </div>
    );
}
