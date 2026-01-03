"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div
        className={cn(
          "bg-surface rounded-2xl p-6 sm:p-8 md:p-12 text-center space-y-4",
          className
        )}
      >
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 mb-4">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-black text-primary">
          Message sent
        </h3>
        <p className="font-serif text-sm sm:text-base text-secondary max-w-md mx-auto">
          We&apos;ll review your message and get back to you within a few days. 
          We appreciate you taking the time to reach out.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("bg-surface rounded-2xl p-5 sm:p-8 md:p-12 space-y-5 sm:space-y-6", className)}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-sm font-semibold text-primary mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-primary placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors touch-manipulation"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-sans text-sm font-semibold text-primary mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-primary placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors touch-manipulation"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="project"
            className="block font-sans text-sm font-semibold text-primary mb-2"
          >
            What are you working on?
          </label>
          <input
            type="text"
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-primary placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors touch-manipulation"
            placeholder="Brief description of your project or situation"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-sans text-sm font-semibold text-primary mb-2"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-primary placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors resize-none touch-manipulation"
            placeholder="Tell us about what you're looking for, any questions you have, or what you'd like to explore together."
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-3 sm:p-4">
          <p className="text-sm text-red-800 font-sans">
            {error}
          </p>
        </div>
      )}

      <div className="pt-2 sm:pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold bg-accent text-onAccent hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

