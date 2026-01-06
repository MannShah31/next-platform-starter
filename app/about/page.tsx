export default function AboutPage() {
    return (
        <div className="flex flex-col gap-16 max-w-4xl">
            {/* PAGE HEADER */}
            <section>
                <h1 className="mb-4 text-4xl font-bold">
                    About Us
                </h1>

                <p className="text-lg">
                    Dagger Garments Private Limited is a Non-Banking Financial Company (NBFC)
                    registered with the Reserve Bank of India under the category of
                    Non-Deposit Taking NBFC.
                </p>
            </section>

            {/* COMPANY OVERVIEW */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Company Overview
                </h2>

                <p>
                    Dagger Garments Private Limited commenced its journey in the year 1996
                    and has since been engaged in providing financial advisory and lending
                    solutions to individuals, small and medium enterprises, and corporates
                    across India.
                </p>
            </section>

            {/* BUSINESS ACTIVITIES */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Our Business
                </h2>

                <p className="mb-4">
                    The Company is engaged in advisory services such as Investment Banking,
                    Corporate Finance, Project Finance, and Trade Finance, along with
                    providing Business and Retail Loans.
                </p>

                <p>
                    Our NBFC business is primarily focused on providing Indian Rupee
                    denominated secured and unsecured structured term financing solutions
                    to individuals and corporates, with a particular focus on small and
                    medium enterprise (SME) borrowers in India.
                </p>
            </section>

            {/* LENDING PHILOSOPHY */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Lending Philosophy
                </h2>

                <p>
                    We provide lending solutions against tangible collateral as well as
                    security in other forms, including charge on operating cash flows and
                    other appropriate credit structures. Our lending approach is supported
                    by prudent credit evaluation, structured risk assessment, and a
                    compliance-driven operating framework.
                </p>
            </section>

            {/* MANAGEMENT & TEAM */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Management & Team
                </h2>

                <p>
                    The Company is managed by a team of professionals with experience in
                    finance, lending, and advisory services. The management team follows a
                    disciplined approach to governance, risk management, and regulatory
                    compliance in line with applicable guidelines.
                </p>
            </section>
        </div>
    );
}
