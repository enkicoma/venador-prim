"use client";

import type React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GetInTouchSection() {
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
            Send Us a Message
          </h2>
          <p className="text-gray-600">
            Have a project in mind? Fill out the form below, and our team will
            get back to you as soon as possible.
          </p>
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
                  123 Concrete Avenue, Build City, BC 45678
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
                  +1 (555) 123-4567
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
                  info@concretepillarco.com
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
                    placeholder="Name *"
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
                    placeholder="Lastname *"
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
                    placeholder="E-Mail Address *"
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
                    placeholder="Telephone *"
                    required
                  />
                  {/* <span className="absolute text-red-500 text-sm top-3 -right-3">*</span> */}
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
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  className="inline-flex items-center px-6 py-6 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                  style={{ backgroundColor: "#1B3B47" }}
                >
                  <span className="mr-2">Submit Now</span>
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
