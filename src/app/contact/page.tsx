'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
// Assuming SocialLinks component exists and will be styled separately.
// import SocialLinks from '@/components/common/SocialLinks'; 
import { SITE_CONFIG } from '@/lib/constants';

// --- Local, Reusable Components ---
interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h1 className="text-4xl sm:text-5xl font-sans font-bold text-foreground mb-6">{children}</h1>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-card border border-border rounded-lg shadow-lg ${className}`}>{children}</div>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...props} className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...props} className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-vertical" />
);

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-sans font-semibold text-muted mb-2">{children}</label>
);

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled }: ButtonProps) => (
  <button type="submit" disabled={disabled} className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-sans font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
    {children}
  </button>
);

interface AlertProps {
  children: React.ReactNode;
  type: 'success' | 'error';
}

const Alert = ({ children, type }: AlertProps) => {
  const variants = {
    success: "bg-green-500/10 border-green-500/20 text-green-700",
    error: "bg-red-500/10 border-red-500/20 text-red-700",
  };
  return <div className={`mb-6 p-4 border rounded-md font-sans ${variants[type]}`}>{children}</div>;
};

// --- Main Page Component ---
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', requestType: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      await emailjs.send(serviceId, templateId, { 
        from_name: formData.name, 
        from_email: formData.email, 
        organization: formData.organization,
        request_type: formData.requestType,
        subject: formData.subject, 
        message: formData.message, 
        reply_to: formData.email 
      }, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', requestType: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24">
      <header className="text-center mb-12">
        <SectionTitle>Contact & Collaboration</SectionTitle>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted font-serif leading-relaxed">
          I welcome opportunities for research collaboration, academic discussions, and professional partnerships. For CV requests, please provide your details and I&apos;ll send it directly after verification.
        </p>
      </header>

      <Card className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && <Alert type="success">Thank you for your request! I&apos;ll review your information and respond within 24 hours. For CV requests, I&apos;ll send it directly to your email after verification.</Alert>}
            {submitStatus === 'error' && <Alert type="error">Sorry, there was an error. Please try again or email me directly.</Alert>}
            
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="organization">Organization/Company</Label>
              <Input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} placeholder="University, Company, or Institution" />
            </div>
            <div>
              <Label htmlFor="requestType">Purpose of Contact</Label>
              <Select id="requestType" name="requestType" required value={formData.requestType} onChange={handleChange}>
                <option value="">Select purpose...</option>
                <option value="cv-request">CV Request</option>
                <option value="academic-application">Academic Application Support</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="research-collaboration">Research Collaboration</option>
                <option value="consulting">Consulting Inquiry</option>
                <option value="general-inquiry">General Inquiry</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} />
            </div>
            <Button disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
          </form>

          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-sans font-semibold text-foreground mb-2">Direct Contact</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline font-serif">{SITE_CONFIG.email}</a>
            </div>
            <div>
              <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Collaboration Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Computational Chemistry', 'Molecular Modeling', 'Scientific Computing', 'Research', 'Web Apps'].map(tag => 
                  <span key={tag} className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">{tag}</span>
                )}
              </div>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-xl font-sans font-semibold text-foreground mb-2">Response Commitment</h3>
              <p className="font-serif text-muted leading-relaxed">I typically respond to academic and research inquiries within 24-48 hours. For urgent opportunities, I aim to respond on the same business day.</p>
            </div>
          </aside>
        </div>
      </Card>
    </div>
  );
}