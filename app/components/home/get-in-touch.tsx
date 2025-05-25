"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function GetInTouchSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
      type: "success" | "error" | null;
      message: string | null;
    }>({
      type: null,
      message: null,
    });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    console.log("submitted data:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message:
          t("contact.form.successMessage") || "Message sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        lastname: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          t("contact.form.errorMessage") ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-1 ring-primary ring-offset-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700">
                  {t("contact.office.address")}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-1 ring-primary ring-offset-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <a
                  href="tel:+15551234567"
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {t("contact.office.phone")}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-1 ring-primary ring-offset-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <a
                  href="mailto:info@concretepillarco.com"
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {t("contact.office.email")}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full">
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
        </div>
      </div>
    </section>
  );
}
