import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
  title: 'Home | Dagger Garments Private Limited',
  description:
    'Dagger Garments Private Limited is an RBI-registered NBFC providing structured finance solutions to SMEs in India.'
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Hero */}
      <section>
        <h1 className="mb-6">
          Dagger Garments Private Limited
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl">
          An RBI-registered Non-Banking Financial Company (NBFC) focused on
          providing structured financing solutions to small and medium
          enterprises across India.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/about" className="btn btn-lg">
            About Us
          </Link>
          <Link href="/investor-relations" className="btn btn-lg btn-outline">
            Investor Relations
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="SME Financing">
            <p>
              Structured secured and unsecured term financing solutions
              tailored for Indian SMEs.
            </p>
          </Card>
          <Card title="Trade Finance">
            <p>
              Working capital and trade finance solutions aligned with
              operating cash flows.
            </p>
          </Card>
          <Card title="Advisory Services">
            <p>
              Investment banking, corporate finance, and project finance
              advisory services.
            </p>
          </Card>
        </div>
      </section>

      {/* Regulatory */}
      <section className="bg-slate-800/50 rounded-lg p-8">
        <h2 className="mb-4">Regulatory Status</h2>
        <p className="text-slate-300 max-w-3xl">
          Dagger Garments Private Limited is registered with the Reserve Bank
          of India (RBI) as a Non-Deposit Accepting NBFC and operates in
          compliance with all applicable regulatory guidelines.
        </p>
      </section>
    </div>
  );
}
