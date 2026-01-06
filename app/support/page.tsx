export default function SupportPage() {
    return (
        <div className="flex flex-col gap-16 max-w-4xl">
            {/* PAGE HEADER */}
            <section>
                <h1 className="mb-4 text-4xl font-bold">
                    Support
                </h1>

                <p className="text-lg">
                    For any queries, support requests, or official communication, please
                    reach out to us using the details provided below.
                </p>
            </section>

            {/* ADDRESS */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Registered Office Address
                </h2>

                <p>
                    Dagger Garments Private Limited<br />
                    {/* Replace the address below with the registered address */}
                    [Registered Office Address]<br />
                    India
                </p>
            </section>

            {/* CONTACT DETAILS */}
            <section>
                <h2 className="mb-3 text-2xl font-semibold">
                    Contact Details
                </h2>

                <p>
                    <strong>Phone:</strong> [Phone Number]
                </p>

                <p className="mt-2">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@daggergarments.com" className="underline">
                        info@daggergarments.com
                    </a>
                </p>
            </section>
        </div>
    );
}
