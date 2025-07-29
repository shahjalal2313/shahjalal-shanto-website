'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '@/components/common/SocialLinks';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - replace with your actual service details
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization,
        inquiry_type: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        to_email: 'Shahjalal2313@gmail.com',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', inquiryType: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Academic Contact & Collaboration</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I welcome opportunities for research collaboration, academic discussions, 
          graduate program inquiries, and professional partnerships in computational 
          chemistry and scientific computing. Let&apos;s advance science together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Research Inquiry Form
          </h2>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Sorry, there was an error sending your message. Please try again
              or use the direct email link.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Organization/Institution (optional)
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="University, Company, Research Institution"
              />
            </div>

            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Type of Inquiry
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select inquiry type</option>
                <option value="graduate-program">Graduate Program Inquiry</option>
                <option value="research-collaboration">Research Collaboration</option>
                <option value="academic-discussion">Academic Discussion</option>
                <option value="professional-opportunity">Professional Opportunity</option>
                <option value="project-consultation">Project Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Academic Contact Information
          </h2>

          <div className="space-y-6">
            {/* Direct Email */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Connect & Follow
              </h3>
              <SocialLinks layout="vertical" showDescriptions={true} />
            </div>

            {/* Response Time */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Response Commitment
              </h3>
              <p className="text-gray-600">
                I typically respond to academic inquiries and research collaboration 
                requests within 24-48 hours. For urgent graduate program or research 
                opportunities, I aim to respond within the same business day.
              </p>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Research & Collaboration Interests
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Computational Chemistry & Molecular Modeling</li>
                <li>• SMILES Notation & Chemical Informatics</li>
                <li>• Scientific Computing & Data Analysis</li>
                <li>• Graduate School Research Opportunities</li>
                <li>• Open-Source Scientific Software Development</li>
                <li>• Interdisciplinary Chemistry-CS Projects</li>
                <li>• Academic Conference Presentations & Discussions</li>
                <li>• Research Methodology & Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
