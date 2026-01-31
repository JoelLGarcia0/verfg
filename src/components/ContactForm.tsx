// src/components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";

type SubmitStatus = "success" | "error" | null;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    // honeypot (anti-spam)
    company: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const inputBase =
    "w-full px-4 py-3 bg-white border border-black/10 body-font text-gray-800 " +
    "focus:outline-none focus:ring-2 focus:ring-darkred/30 focus:border-black/10";

  const errorBorder = "border-red-500 focus:ring-red-300/50";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, silently "succeed"
    if (formData.company.trim()) {
      setSubmitStatus("success");
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
        company: "",
      });
      setErrors({});
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot (hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block body-font text-sm font-medium text-darkred mb-2"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? errorBorder : ""}`}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 body-font">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block body-font text-sm font-medium text-darkred mb-2"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? errorBorder : ""}`}
            placeholder="your.email@example.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 body-font">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block body-font text-sm font-medium text-darkred mb-2"
          >
            Phone <span className="text-gray-500 text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputBase}
            placeholder="(305) 555-1234"
            autoComplete="tel"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block body-font text-sm font-medium text-darkred mb-2"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBase} bg-white`}
          >
            <option value="">Select a service</option>
            <option value="individual-tax">Individual Tax Return</option>
            <option value="business-tax">Business Tax Return</option>
            <option value="bookkeeping">Bookkeeping and Accounting</option>
            <option value="payroll">Payroll Services</option>
            <option value="advisory">Advisory and Planning</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block body-font text-sm font-medium text-darkred mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputBase}
          placeholder="Subject of your inquiry"
          autoComplete="off"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block body-font text-sm font-medium text-darkred mb-2"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={7}
          className={`${inputBase} ${
            errors.message ? errorBorder : ""
          } resize-y`}
          placeholder="Tell us about your needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 body-font">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-darkred text-beige border border-darkred body-font font-medium tracking-normal
          transform-gpu will-change-transform
          transition-[transform,background-color,box-shadow] duration-200 ease-out
          hover:bg-darkred/90 hover:shadow-md hover:-translate-y-0.5
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkred/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {/* Inline status */}
        {submitStatus === "success" && (
          <div className="w-full sm:w-auto px-4 py-3 border border-green-200 bg-green-50 text-green-800 body-font text-sm">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="w-full sm:w-auto px-4 py-3 border border-red-200 bg-red-50 text-red-800 body-font text-sm">
            There was an error submitting your message. Please try again.
          </div>
        )}
      </div>

      {/* Small helper text */}
      <p className="body-font text-xs text-gray-500">
        By submitting this form, you consent to being contacted by VERA
        Financial Group.
      </p>
    </form>
  );
}
