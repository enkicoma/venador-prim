"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactFormSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1B3B47" }}>
            {t("contact.form.title")}
          </h2>
          <p className="text-gray-600">{t("contact.form.description")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Lastname Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                placeholder={t("contact.form.name")}
                required
              />
              {/* <span className="absolute text-red-500 text-sm top-3 -right-3">*</span> */}
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                placeholder={t("contact.form.lastname")}
                required
              />
              {/* <span className="absolute text-red-500 text-sm top-3 -right-3">*</span> */}
            </div>
          </div>

          {/* Email and Telephone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                placeholder={t("contact.form.email")}
                required
              />
              {/* <span className="absolute text-red-500 text-sm top-3 -right-3">*</span> */}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                placeholder={t("contact.form.telephone")}
                required
              />
              {/* <span className="absolute text-red-500 text-sm top-3 -right-3">*</span> */}
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="relative">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition appearance-none bg-white"
            >
              <option value="" disabled>
                {t("contact.form.subject")}
              </option>
              <option value="general">
                {t("contact.form.subjects.general")}
              </option>
              <option value="support">
                {t("contact.form.subjects.support")}
              </option>
              <option value="sales">{t("contact.form.subjects.sales")}</option>
              <option value="other">{t("contact.form.subjects.other")}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
              placeholder={t("contact.form.message")}
            />
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="inline-flex items-center px-6 py-6 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              style={{ backgroundColor: "#1B3B47" }}
            >
              <span className="mr-2">{t("contact.form.submit")}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
