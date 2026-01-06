import { Card } from '../components/Card';

export const metadata = {
    title: 'Investor Relations',
    description:
        'Investor information, disclosures, and corporate governance details for Dagger Garments Private Limited.'
};

export default function InvestorRelationsPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6">Investor Relations</h1>
                <p className="text-xl text-slate-300">
                    Transparent communication and responsible governance for our
                    investors and stakeholders.
                </p>
            </section>

            {/* Investor Overview */}
            <section>
                <h2 className="mb-6">Overview</h2>
                <div className="space-y-4 text-slate-300">
                    <p>
                        Dagger Garments Private Limited is committed to maintaining high
                        standards of transparency, accountability, and corporate
                        governance. This section provides access to key information for
                        investors, lenders, and other stakeholders.
                    </p>
                    <p>
                        As a Non-Banking Financial Company (NBFC) registered with the
                        Reserve Bank of India (RBI), we comply with all applicable
                        regulatory requirements and disclosure norms.
                    </p>
                </div>
            </section>

            {/* Annual Reports */}
            <section>
                <h2 className="mb-6">Annual Reports</h2>
                <Card title="Financial Disclosures">
                    <p className="text-slate-300">
                        Our Annual Reports provide a comprehensive overview of the
                        Company’s financial performance, operational highlights, and
                        strategic direction.
                    </p>
                    <p className="mt-3 text-sm text-slate-400 italic">
                        Annual Reports will be published here as and when they become
                        available.
                    </p>
                </Card>
            </section>

            {/* Corporate Announcements */}
            <section>
                <h2 className="mb-6">Corporate Announcements</h2>
                <Card title="Regulatory & Corporate Updates">
                    <p className="text-slate-300">
                        All material corporate announcements, disclosures, and updates
                        made by the Company from time to time will be disclosed in this
                        section in accordance with applicable laws and regulatory
                        guidelines.
                    </p>
                    <p className="mt-3 text-sm text-slate-400 italic">
                        Corporate announcements will be updated periodically.
                    </p>
                </Card>
            </section>

            {/* Policies */}
            <section>
                <h2 className="mb-6">Policies & Governance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card title="Corporate Governance">
                        <p>
                            The Company follows strong corporate governance practices to
                            ensure ethical conduct, transparency, and long-term value
                            creation for stakeholders.
                        </p>
                    </Card>
                    <Card title="Statutory & Regulatory Policies">
                        <p>
                            Policies adopted in compliance with RBI guidelines and
                            applicable laws will be made available here for reference.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Regulatory Information */}
            <section className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="mb-6">Regulatory Information</h2>
                <div className="space-y-4 text-slate-300">
                    <p>
                        Dagger Garments Private Limited is registered with the Reserve Bank
                        of India as a Non-Deposit Taking Non-Banking Financial Company
                        (NBFC). The Company operates in strict adherence to RBI
                        regulations and disclosure requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div>
                            <p className="font-semibold text-white">Regulatory Authority</p>
                            <p>Reserve Bank of India (RBI)</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">NBFC Category</p>
                            <p>Non-Deposit Taking NBFC</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">CIN</p>
                            <p>[Insert CIN Number]</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Registered Office</p>
                            <p>[Insert Registered Office Address]</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
