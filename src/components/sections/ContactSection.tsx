"use client";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <ContactItem icon="📧" text="ibhalla1998@gmail.com" />
              <ContactItem icon="📱" text="+1(669)609-3553" />
              <ContactItem icon="📍" text="San Francisco, CA" />
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Social Links</h3>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/ishaanbhalla" label="GH" />
              <SocialLink
                href="https://linkedin.com/in/ishaanbhalla"
                label="LI"
              />
              <SocialLink href="https://twitter.com/ishaanbhalla" label="TW" />
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-text-secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/30 border border-accent-primary/30 rounded-lg focus:outline-none focus:border-accent-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg transition-all transform hover:scale-105 w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for contact info items
function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <p className="flex items-center gap-3">
      <span className="w-8 h-8 flex items-center justify-center bg-accent-primary/20 rounded-full">
        {icon}
      </span>
      {text}
    </p>
  );
}

// Helper component for social links
function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-accent-primary/20 rounded-full hover:bg-accent-primary/40 transition-colors"
    >
      <span>{label}</span>
    </a>
  );
}
