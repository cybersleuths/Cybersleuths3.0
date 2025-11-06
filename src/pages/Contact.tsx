import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const faqs = [
    {
      question: "How can I join CyberSleuths?",
      answer:
        "You can join CyberSleuths by filling out our registration form. We accept students of all skill levels, from complete beginners to experienced hackers. Simply click the 'Join Us' button on our website or contact us directly.",
    },
    {
      question: "Are the events open to all students?",
      answer:
        "Yes! All our events are open to any student in the college who is interested in cybersecurity. Whether you're a first-year student or a senior, everyone is welcome. No prior experience is required.",
    },
    {
      question: "What skills are required to be a member?",
      answer:
        "There are no specific skill requirements to join CyberSleuths. We have members at all levels - from beginners learning the basics to advanced members working on complex security research. We believe in learning together and helping each other grow.",
    },
    {
      question: "How often do you meet?",
      answer:
        "We hold regular meetings every week, typically on Wednesdays at 5 PM in the Tech Lab. We also organize special workshops, competitions, and events throughout the semester. Check our Events page for the latest schedule.",
    },
    {
      question: "Do you charge membership fees?",
      answer:
        "CyberSleuths is a free club! There are no membership fees. However, some specialized training programs or certifications through our ISOEH partnership may have associated costs, but these are optional.",
    },
    {
      question: "How can I participate in CTF competitions?",
      answer:
        "We regularly organize Capture The Flag (CTF) competitions both internally and in collaboration with other institutions. You can register for competitions through our website or contact our Events Coordinator for more information.",
    },
    {
      question: "Can I contribute to the club's resources?",
      answer:
        "Absolutely! We encourage members to contribute articles, tutorials, tools, and other resources to our community. If you have something to share, please contact our Technical Lead or submit through our contribution form.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes, we follow a strict ethical hacking code of conduct. All members must commit to practicing ethical hacking, respecting privacy, and following responsible disclosure practices. We take security and ethics very seriously.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">Contact Us</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have questions? Want to collaborate? Get in touch with the CyberSleuths team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="cyber-card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:cybersleuths@college.edu"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                info.cyberslueths@bcrec.ac.in
              </a>
            </div>

            <div className="cyber-card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                  <MapPin size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-foreground/70">CSE LAB 6, 2nd Floor<br />Main Building</p>
            </div>

            <div className="cyber-card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Phone size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-foreground/70">+91 99999 99999</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Follow Us On Social Media</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="cyber-card">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 focus:border-blue-500/70 outline-none transition-colors text-foreground placeholder-foreground/50"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 focus:border-blue-500/70 outline-none transition-colors text-foreground placeholder-foreground/50"
                    placeholder="your.email@college.edu"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 focus:border-blue-500/70 outline-none transition-colors text-foreground placeholder-foreground/50 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full cyber-button justify-center">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left font-semibold hover:text-blue-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-blue-500/10 text-foreground/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join CyberSleuths?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Don't wait! Register now and become part of our growing community of cybersecurity enthusiasts.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-block"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}

