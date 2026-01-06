export default function SolutionsPage() {
    return (
        <div className="flex flex-col gap-16 max-w-4xl">
            <section>
                <h1 className="mb-4 text-4xl font-bold">
                    Our Solutions
                </h1>

                <p className="text-lg">
                    Dagger Garments Private Limited provides structured financing and advisory
                    solutions designed to meet the evolving needs of SMEs, corporates, and
                    individuals across India.
                </p>
            </section>

            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Lending Solutions
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Indian Rupee denominated structured term loans</li>
                    <li>Secured and unsecured financing solutions</li>
                    <li>Business and retail loans</li>
                    <li>Lending against tangible collateral</li>
                    <li>Financing secured by operating cash flows and other credit structures</li>
                </ul>
            </section>

            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Advisory Services
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Investment Banking advisory</li>
                    <li>Corporate Finance advisory</li>
                    <li>Project Finance advisory</li>
                    <li>Trade Finance advisory</li>
                </ul>
            </section>
        </div>
    );
}
