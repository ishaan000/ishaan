"use client";
import { FormEvent, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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

    try {
      // Send form data to our API endpoint
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

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <ContactItem
                icon={<MdEmail className="text-accent-primary" size={20} />}
                text="ibhalla1998@gmail.com"
              />
              <ContactItem
                icon={<MdPhone className="text-accent-primary" size={20} />}
                text="+1(669)609-3553"
              />
              <ContactItem
                icon={
                  <MdLocationOn className="text-accent-primary" size={20} />
                }
                text="San Francisco, CA"
              />
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Social Links</h3>
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/ishaan000"
                icon={<FaGithub size={20} />}
              />
              <SocialLink
                href="https://linkedin.com/in/ishaan-bhalla"
                icon={<FaLinkedin size={20} />}
              />
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
                  Message sent successfully! Ishaan will reach back as soon as
                  possible.
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

      {/* Scroll to top button */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={scrollToTop}
          className="w-12 h-6 bg-transparent border-2 border-accent-primary rounded-b-full overflow-hidden cursor-pointer hover:bg-accent-primary/20 transition-all transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <div className="w-full h-full flex justify-center items-center">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L8 1L15 7"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}

// Helper component for contact info items
function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
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
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-accent-primary/20 rounded-full hover:bg-accent-primary/40 transition-colors"
    >
      {icon}
    </a>
  );
}
