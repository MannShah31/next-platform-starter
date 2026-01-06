export default function InvestorRelationsPage() {
    return (
        <div className="flex flex-col gap-16 max-w-4xl">
            {/* PAGE HEADER */}
            <section>
                <h1 className="mb-4 text-4xl font-bold">
                    Investor Relations
                </h1>

                <p className="text-lg">
                    This section provides information relevant to shareholders, investors,
                    and other stakeholders of Dagger Garments Private Limited.
                </p>
            </section>

            {/* ANNUAL REPORTS */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Annual Reports
                </h2>

                <p>
                    The Company’s Annual Reports provide detailed information on its
                    financial performance, operations, and governance practices.
                </p>

                <p className="mt-2 text-sm italic">
                    Annual Reports will be made available here as and when published.
                </p>
            </section>

            {/* CORPORATE ANNOUNCEMENTS */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Corporate Announcements
                </h2>

                <p>
                    All material corporate announcements and disclosures made by the
                    Company from time to time will be published in this section in
                    accordance with applicable regulatory requirements.
                </p>

                <p className="mt-2 text-sm italic">
                    Corporate announcements will be updated periodically.
                </p>
            </section>

            {/* POLICIES */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Policies
                </h2>

                <p>
                    The Company has adopted various policies and codes in line with
                    regulatory guidelines and best practices to ensure transparency,
                    accountability, and good corporate governance.
                </p>

                <p className="mt-2 text-sm italic">
                    Relevant policies will be made available here for reference.
                </p>
            </section>
        </div>
    );
}
