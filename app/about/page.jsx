import { Card } from 'components/Card';

export const metadata = {
    title: 'About Us',
    description: 'Learn about Dagger Garments Private Limited - a trusted NBFC serving the garment industry with tailored financial solutions since 2014.'
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6">About Dagger Garments Private Limited</h1>
                <p className="text-xl text-slate-300">
                    A trusted Non-Banking Financial Company dedicated to empowering garment businesses across India.
                </p>
            </section>

            {/* Company Story */}
            <section>
                <h2 className="mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-300">
                    <p>
                        Founded in 2014, Dagger Garments Private Limited emerged from a vision to bridge the financing gap
                        in India's thriving garment industry. Our founders, with decades of experience in textile manufacturing
                        and financial services, recognized that traditional banks often couldn't meet the unique needs of
                        garment businesses — seasonal cash flows, rapid inventory turnover, and time-sensitive orders.
                    </p>
                    <p>
                        As a registered Non-Banking Financial Company (NBFC), we specialize in providing tailored financial
                        solutions that align with the garment industry's business cycles. From small-scale manufacturers to
                        large export houses, we've helped over 500 businesses achieve their growth ambitions.
                    </p>
                    <p>
                        Today, we continue to innovate with digital lending solutions while maintaining the personal touch
                        that our clients value. Our team of industry experts understands your business, making financing
                        decisions faster and more relevant to your needs.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-6">
                <Card title="Our Mission">
                    <p>
                        To empower garment businesses with accessible, transparent, and customized financial solutions
                        that fuel growth and create lasting partnerships built on trust and mutual success.
                    </p>
                </Card>
                <Card title="Our Vision">
                    <p>
                        To be India's most trusted NBFC for the garment industry, known for our deep industry expertise,
                        innovative products, and commitment to customer success.
                    </p>
                </Card>
            </section>

            {/* Core Values */}
            <section>
                <h2 className="mb-6">Our Core Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card title="Integrity">
                        <p>Transparent dealings, honest communication, and ethical business practices in every interaction.</p>
                    </Card>
                    <Card title="Customer First">
                        <p>Your success is our success. We design solutions around your needs, not the other way around.</p>
                    </Card>
                    <Card title="Industry Expertise">
                        <p>Deep understanding of garment industry dynamics enables us to serve you better.</p>
                    </Card>
                    <Card title="Innovation">
                        <p>Continuously improving our processes and products to serve you faster and more efficiently.</p>
                    </Card>
                </div>
            </section>

            {/* Leadership Team */}
            <section>
                <h2 className="mb-6">Leadership Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card title="Rajesh Kumar">
                        <p className="text-sm text-slate-500 mb-2">Managing Director & CEO</p>
                        <p>
                            With 25+ years in textile manufacturing and financial services, Rajesh leads our strategic vision
                            and growth initiatives.
                        </p>
                    </Card>
                    <Card title="Priya Sharma">
                        <p className="text-sm text-slate-500 mb-2">Chief Financial Officer</p>
                        <p>
                            A chartered accountant with expertise in NBFC regulations and risk management, ensuring sound
                            financial governance.
                        </p>
                    </Card>
                    <Card title="Arun Mehta">
                        <p className="text-sm text-slate-500 mb-2">Head of Operations</p>
                        <p>
                            Former banker with 15 years of experience, Arun oversees our lending operations and customer
                            service excellence.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Regulatory Information */}
            <section className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="mb-6">Regulatory Compliance</h2>
                <div className="space-y-4 text-slate-300">
                    <p>
                        Dagger Garments Private Limited is a Non-Banking Financial Company registered with the
                        Reserve Bank of India (RBI). We adhere to all regulatory guidelines and maintain the highest
                        standards of corporate governance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div>
                            <p className="font-semibold text-white">RBI Registration</p>
                            <p>Registered NBFC under RBI guidelines</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Corporate Office</p>
                            <p>Mumbai, Maharashtra, India</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">CIN Number</p>
                            <p>U65910MH2014PTC123456</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Established</p>
                            <p>2014</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
