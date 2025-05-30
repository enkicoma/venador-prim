'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function GetInTouchSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name =
        t('contact.form.errors.nameRequired') || 'Name is required';
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname =
        t('contact.form.errors.lastnameRequired') || 'Last name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email =
        t('contact.form.errors.emailRequired') || 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        t('contact.form.errors.emailInvalid') || 'Please enter a valid email';
    }

    const phoneRegex = /^\+?[\d\s-()]{8,}$/;
    if (!formData.telephone.trim()) {
      newErrors.telephone =
        t('contact.form.errors.phoneRequired') || 'Phone number is required';
    } else if (!phoneRegex.test(formData.telephone)) {
      newErrors.telephone =
        t('contact.form.errors.phoneInvalid') ||
        'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message =
        t('contact.form.errors.messageRequired') || 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message =
        t('contact.form.errors.messageTooShort') ||
        'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message:
          t('contact.form.successMessage') || 'Message sent successfully!',
      });

      setFormData({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          t('contact.form.errorMessage') ||
          'Failed to send message. Please try again.',
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1B3B47' }}>
            {t('contact.form.title')}
          </h2>
          <p className="text-gray-600">{t('contact.form.description')}</p>
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
                  {t('contact.office.address')}
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
                  {t('contact.office.phone')}
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
                  {t('contact.office.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-primary'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition`}
                    placeholder={t('contact.form.name')}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.lastname ? 'border-red-500' : 'border-primary'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition`}
                    placeholder={t('contact.form.lastname')}
                    required
                  />
                  {errors.lastname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastname}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-primary'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition`}
                    placeholder={t('contact.form.email')}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.telephone ? 'border-red-500' : 'border-primary'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition`}
                    placeholder={t('contact.form.telephone')}
                    required
                  />
                  {errors.telephone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.telephone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-primary'
                  } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none`}
                  placeholder={t('contact.form.message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-6 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#1B3B47' }}
                >
                  <span className="mr-2">
                    {isSubmitting
                      ? t('contact.form.sending') || 'Sending...'
                      : t('contact.form.submit') || 'Send Message'}
                  </span>
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
