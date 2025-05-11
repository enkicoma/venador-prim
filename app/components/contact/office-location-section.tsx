"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function OfficeLocationSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1B3B47" }}
            >
              {t("contact.office.title")}
            </h2>
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
                  href="mailto:info@venadorprim.com"
                  className="text-lg text-gray-700 hover:text-primary transition-colors"
                >
                  {t("contact.office.email")}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.7243285729055!2d28.757563!3d46.967106099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97fb0d1694021%3A0x457224c507a53878!2sVenador%20Prim%20SRL%20Industrial%20Park%20FAIP!5e0!3m2!1sen!2sbd!4v1742417047962!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={t("contact.office.mapTitle")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
