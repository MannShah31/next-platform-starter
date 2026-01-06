'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from 'components/Card';
import { Alert } from 'components/alert';

export default function ApplyPage() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
                myForm.reset();
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6">Apply for a Loan</h1>
                <p className="text-xl text-slate-300">
                    Complete the application form below and our team will review your request within 48 hours.
                    For faster processing, please ensure all information is accurate.
                </p>
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Application Form */}
                <div className="lg:col-span-2">
                    <Card title="Loan Application Form">
                        <form name="loan-application" onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                            <input type="hidden" name="form-name" value="loan-application" />

                            {/* Loan Details Section */}
                            <div className="border-b border-neutral-200 pb-4">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Loan Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="loan-type" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Loan Type *
                                        </label>
                                        <select name="loan-type" id="loan-type" required className="input w-full">
                                            <option value="">Select loan type</option>
                                            <option value="business-loan">Business Loan</option>
                                            <option value="working-capital">Working Capital Finance</option>
                                            <option value="trade-finance">Trade Finance</option>
                                            <option value="equipment-finance">Equipment Financing</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="loan-amount" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Required Amount (Rs.) *
                                        </label>
                                        <input
                                            name="loan-amount"
                                            id="loan-amount"
                                            type="text"
                                            placeholder="e.g., 50,00,000"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="loan-tenure" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Preferred Tenure (months) *
                                        </label>
                                        <select name="loan-tenure" id="loan-tenure" required className="input w-full">
                                            <option value="">Select tenure</option>
                                            <option value="12">12 months</option>
                                            <option value="24">24 months</option>
                                            <option value="36">36 months</option>
                                            <option value="48">48 months</option>
                                            <option value="60">60 months</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="loan-purpose" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Purpose of Loan *
                                        </label>
                                        <input
                                            name="loan-purpose"
                                            id="loan-purpose"
                                            type="text"
                                            placeholder="e.g., Equipment purchase, expansion"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Business Information Section */}
                            <div className="border-b border-neutral-200 pb-4">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Business Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label htmlFor="business-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Business Name *
                                        </label>
                                        <input
                                            name="business-name"
                                            id="business-name"
                                            type="text"
                                            placeholder="Enter your registered business name"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="business-type" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Business Type *
                                        </label>
                                        <select name="business-type" id="business-type" required className="input w-full">
                                            <option value="">Select type</option>
                                            <option value="proprietorship">Proprietorship</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="pvt-ltd">Private Limited</option>
                                            <option value="llp">LLP</option>
                                            <option value="public-ltd">Public Limited</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="business-vintage" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Years in Business *
                                        </label>
                                        <select name="business-vintage" id="business-vintage" required className="input w-full">
                                            <option value="">Select years</option>
                                            <option value="0-2">0-2 years</option>
                                            <option value="2-5">2-5 years</option>
                                            <option value="5-10">5-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="annual-turnover" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Annual Turnover (Rs.) *
                                        </label>
                                        <select name="annual-turnover" id="annual-turnover" required className="input w-full">
                                            <option value="">Select range</option>
                                            <option value="below-50L">Below 50 Lakhs</option>
                                            <option value="50L-1Cr">50 Lakhs - 1 Crore</option>
                                            <option value="1Cr-5Cr">1 Crore - 5 Crores</option>
                                            <option value="5Cr-10Cr">5 Crores - 10 Crores</option>
                                            <option value="above-10Cr">Above 10 Crores</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="gst-number" className="block text-sm font-medium text-neutral-700 mb-1">
                                            GST Number *
                                        </label>
                                        <input
                                            name="gst-number"
                                            id="gst-number"
                                            type="text"
                                            placeholder="e.g., 27XXXXX1234X1Z5"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="business-address" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Business Address *
                                        </label>
                                        <textarea
                                            name="business-address"
                                            id="business-address"
                                            placeholder="Enter complete business address"
                                            required
                                            rows={2}
                                            className="input w-full resize-y"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                                            City *
                                        </label>
                                        <input
                                            name="city"
                                            id="city"
                                            type="text"
                                            placeholder="Enter city"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                                            State *
                                        </label>
                                        <input
                                            name="state"
                                            id="state"
                                            type="text"
                                            placeholder="Enter state"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Applicant Information Section */}
                            <div className="border-b border-neutral-200 pb-4">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Applicant Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="applicant-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            name="applicant-name"
                                            id="applicant-name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="designation" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Designation *
                                        </label>
                                        <input
                                            name="designation"
                                            id="designation"
                                            type="text"
                                            placeholder="e.g., Director, Proprietor"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                                            Mobile Number *
                                        </label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pan-number" className="block text-sm font-medium text-neutral-700 mb-1">
                                            PAN Number *
                                        </label>
                                        <input
                                            name="pan-number"
                                            id="pan-number"
                                            type="text"
                                            placeholder="e.g., ABCDE1234F"
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Consent */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    id="consent"
                                    required
                                    className="mt-1"
                                />
                                <label htmlFor="consent" className="text-sm text-neutral-600">
                                    I hereby authorize Dagger Garments Private Limited to verify my information and
                                    contact me regarding this loan application. I confirm that all information provided
                                    is accurate to the best of my knowledge. *
                                </label>
                            </div>

                            <button className="btn btn-lg" type="submit" disabled={status === 'pending'}>
                                {status === 'pending' ? 'Submitting Application...' : 'Submit Application'}
                            </button>

                            {status === 'ok' && (
                                <Alert type="success">
                                    Your loan application has been submitted successfully! Our team will review your
                                    application and contact you within 48 hours. Application reference will be sent
                                    to your email.
                                </Alert>
                            )}
                            {status === 'error' && <Alert type="error">{error}</Alert>}
                        </form>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card title="Documents Required">
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>PAN Card of business & applicant</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>GST Registration Certificate</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>Bank statements (last 12 months)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>ITR for last 2 years</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>Business registration proof</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">&#10003;</span>
                                <span>Address proof of business</span>
                            </li>
                        </ul>
                        <p className="text-xs text-neutral-500 mt-4">
                            * Additional documents may be required based on loan type and amount.
                        </p>
                    </Card>

                    <Card title="Need Help?">
                        <p className="text-sm mb-4">
                            Our loan specialists are available to guide you through the application process.
                        </p>
                        <p className="text-sm">
                            <strong className="text-neutral-900">Call us:</strong><br />
                            +91 22 4567 8900
                        </p>
                        <p className="text-sm mt-2">
                            <strong className="text-neutral-900">Email:</strong><br />
                            loans@daggergarments.com
                        </p>
                        <Link href="/contact" className="btn w-full mt-4 text-sm">
                            Contact Us
                        </Link>
                    </Card>

                    <Card title="Quick Process">
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                <div>
                                    <p className="font-semibold text-neutral-900">Apply Online</p>
                                    <p className="text-neutral-600">Fill the application form</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                <div>
                                    <p className="font-semibold text-neutral-900">Document Verification</p>
                                    <p className="text-neutral-600">Submit required documents</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                                <div>
                                    <p className="font-semibold text-neutral-900">Quick Approval</p>
                                    <p className="text-neutral-600">Decision within 48-72 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                                <div>
                                    <p className="font-semibold text-neutral-900">Disbursement</p>
                                    <p className="text-neutral-600">Funds in your account</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
