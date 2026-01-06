'use client';

import { useState } from 'react';
import { Card } from 'components/Card';
import { Alert } from 'components/alert';

export default function ContactPage() {
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
                <h1 className="mb-6">Contact Us</h1>
                <p className="text-xl text-slate-300">
                    Have questions about our financial products? Get in touch with our team and we'll respond within 24 hours.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <section>
                    <Card title="Send Us a Message">
                        <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
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
                                    Phone Number *
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
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    id="subject"
                                    className="input w-full"
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="business-loan">Business Loan</option>
                                    <option value="working-capital">Working Capital Finance</option>
                                    <option value="trade-finance">Trade Finance</option>
                                    <option value="equipment-finance">Equipment Financing</option>
                                    <option value="partnership">Partnership Inquiry</option>
                                    <option value="complaint">Complaint/Feedback</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Tell us about your requirements..."
                                    required
                                    rows={5}
                                    className="input w-full resize-y"
                                />
                            </div>

                            <button className="btn" type="submit" disabled={status === 'pending'}>
                                {status === 'pending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'ok' && (
                                <Alert type="success">
                                    Thank you for your message! Our team will get back to you within 24 hours.
                                </Alert>
                            )}
                            {status === 'error' && <Alert type="error">{error}</Alert>}
                        </form>
                    </Card>
                </section>

                {/* Contact Information */}
                <section className="space-y-6">
                    <Card title="Head Office">
                        <div className="space-y-3">
                            <p>
                                <strong className="text-neutral-900">Address:</strong><br />
                                Dagger Garments Private Limited<br />
                                4th Floor, Trade Tower<br />
                                Lower Parel, Mumbai - 400013<br />
                                Maharashtra, India
                            </p>
                            <p>
                                <strong className="text-neutral-900">Phone:</strong><br />
                                +91 22 4567 8900<br />
                                +91 22 4567 8901
                            </p>
                            <p>
                                <strong className="text-neutral-900">Email:</strong><br />
                                info@daggergarments.com<br />
                                loans@daggergarments.com
                            </p>
                        </div>
                    </Card>

                    <Card title="Business Hours">
                        <div className="space-y-2">
                            <p><strong className="text-neutral-900">Monday - Friday:</strong> 9:30 AM - 6:30 PM</p>
                            <p><strong className="text-neutral-900">Saturday:</strong> 10:00 AM - 2:00 PM</p>
                            <p><strong className="text-neutral-900">Sunday:</strong> Closed</p>
                            <p className="text-sm text-neutral-500 mt-4">
                                * Our customer support team is available during business hours.
                                For urgent queries, please call our helpline.
                            </p>
                        </div>
                    </Card>

                    <Card title="Branch Locations">
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-neutral-900">Delhi NCR</p>
                                <p className="text-sm">Nehru Place, New Delhi</p>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900">Bengaluru</p>
                                <p className="text-sm">Koramangala, Bengaluru</p>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900">Tirupur</p>
                                <p className="text-sm">Textile Hub, Tirupur</p>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900">Surat</p>
                                <p className="text-sm">Ring Road, Surat</p>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
