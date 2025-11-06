import { ExternalLink, BookOpen, Code, Shield } from "lucide-react";
import { useState } from "react";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: "beginner" | "intermediate" | "advanced";
  type: "article" | "course" | "tool" | "blog";
  url: string;
}

const resources: Resource[] = [
  // Beginner
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "A comprehensive beginner's guide to cybersecurity fundamentals.",
    category: "beginner",
    type: "article",
    url: "https://example.com",
  },
  {
    id: 2,
    title: "Password Security 101",
    description: "Learn how to create strong passwords and manage them securely.",
    category: "beginner",
    type: "article",
    url: "https://example.com",
  },
  {
    id: 3,
    title: "Cybersecurity Basics Course",
    description: "Free online course covering essential cybersecurity concepts.",
    category: "beginner",
    type: "course",
    url: "https://example.com",
  },
  {
    id: 4,
    title: "Common Phishing Attacks",
    description: "Understand and identify common phishing techniques.",
    category: "beginner",
    type: "blog",
    url: "https://example.com",
  },

  // Intermediate
  {
    id: 5,
    title: "Network Security Deep Dive",
    description: "Explore network protocols, firewalls, and intrusion detection systems.",
    category: "intermediate",
    type: "course",
    url: "https://example.com",
  },
  {
    id: 6,
    title: "Web Application Security",
    description: "Master OWASP Top 10 vulnerabilities and defensive techniques.",
    category: "intermediate",
    type: "article",
    url: "https://example.com",
  },
  {
    id: 7,
    title: "Ethical Hacking Fundamentals",
    description: "Learn penetration testing methodologies and tools.",
    category: "intermediate",
    type: "course",
    url: "https://example.com",
  },
  {
    id: 8,
    title: "Cryptography Explained",
    description: "Understanding encryption algorithms and their applications.",
    category: "intermediate",
    type: "blog",
    url: "https://example.com",
  },

  // Advanced
  {
    id: 9,
    title: "Advanced Penetration Testing",
    description: "Professional-level penetration testing techniques and methodologies.",
    category: "advanced",
    type: "course",
    url: "https://example.com",
  },
  {
    id: 10,
    title: "Malware Analysis Handbook",
    description: "Comprehensive guide to analyzing and reverse-engineering malware.",
    category: "advanced",
    type: "article",
    url: "https://example.com",
  },
  {
    id: 11,
    title: "Incident Response & Forensics",
    description: "Learn to investigate security incidents and collect digital evidence.",
    category: "advanced",
    type: "course",
    url: "https://example.com",
  },
  {
    id: 12,
    title: "Zero-Day Vulnerability Research",
    description: "Discovering and exploiting previously unknown vulnerabilities.",
    category: "advanced",
    type: "blog",
    url: "https://example.com",
  },
];

const tools = [
  { name: "Burp Suite", description: "Web application security testing tool" },
  { name: "Metasploit", description: "Penetration testing framework" },
  { name: "Wireshark", description: "Network protocol analyzer" },
  { name: "Nmap", description: "Network discovery and security auditing" },
  { name: "Kali Linux", description: "Penetration testing distribution" },
  { name: "OWASP ZAP", description: "Web application security scanner" },
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");

  const filteredResources = resources.filter((resource) => {
    if (selectedCategory === "all") return true;
    return resource.category === selectedCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "beginner":
        return "bg-green-500/20 text-green-300";
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-300";
      case "advanced":
        return "bg-red-500/20 text-red-300";
      default:
        return "bg-blue-500/20 text-blue-300";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <BookOpen size={18} />;
      case "course":
        return <Code size={18} />;
      case "tool":
        return <Shield size={18} />;
      default:
        return <BookOpen size={18} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">Learning Resources</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Curated cybersecurity learning materials for all skill levels.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-blue-500/20 sticky top-16 bg-background/80 backdrop-blur-md z-40">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["all", "beginner", "intermediate", "advanced"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                    : "border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300"
                }`}
              >
                {category === "all" ? "All Resources" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card group flex flex-col h-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${getCategoryColor(resource.category)}`}>
                    {resource.category}
                  </span>
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                    {getTypeIcon(resource.type)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors flex-1">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 flex-1">
                  {resource.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-blue-300 group-hover:text-blue-200 transition-colors pt-4 border-t border-blue-500/10 font-semibold">
                  Visit Resource
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Essential Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Shield size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-foreground/70 text-sm">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Recommended Learning Path</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { step: 1, title: "Fundamentals", desc: "Start with cybersecurity basics and foundational concepts" },
                { step: 2, title: "Practical Skills", desc: "Learn hands-on skills through labs and practical exercises" },
                { step: 3, title: "Specialization", desc: "Choose a specialization (web, network, forensics, etc.)" },
                { step: 4, title: "Advanced Topics", desc: "Explore advanced topics and emerging threats" },
                { step: 5, title: "Real-World Practice", desc: "Participate in CTFs and bug bounty programs" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="cyber-card flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

