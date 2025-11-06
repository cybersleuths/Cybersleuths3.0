import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  image?: string; // Add image property
}

// Add image URLs for each member (replace with your actual image paths)
const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Rakesh Raushan",
    role: "Club President",
    bio: "Cybersecurity enthusiast with expertise in penetration testing",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "rakesh@college.edu",
    image: "/images/Rakesh.jpg", // Example image path
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Vice President",
    bio: "Network security specialist and CTF competition organizer",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sarah@college.edu",
    image: "/images/sarah.jpg",
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Technical Lead",
    bio: "Malware analysis and reverse engineering expert",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "marcus@college.edu",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Events Coordinator",
    bio: "Organizes workshops and community engagement activities",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "emma@college.edu",
  },
];

// Add images for active members as well
const members: TeamMember[] = [
  {
    id: 5,
    name: "David Park",
    role: "Security Researcher",
    image: "/images/david.jpg",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Web Security Specialist",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Network Administrator",
  },
  {
    id: 8,
    name: "Priya Patel",
    role: "Cryptography Expert",
  },
  {
    id: 9,
    name: "Michael Brown",
    role: "Forensics Analyst",
  },
  {
    id: 10,
    name: "Jessica Lee",
    role: "Cloud Security Specialist",
  },
  {
    id: 11,
    name: "Ryan Martinez",
    role: "IoT Security Researcher",
  },
  {
    id: 12,
    name: "Sophia Anderson",
    role: "Incident Response Specialist",
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">Our Team</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Meet the talented individuals who lead and support CyberSleuths.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="cyber-card group text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                {/* Avatar or Image */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-blue-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}

                {/* Name and Role */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-300 font-semibold text-sm mb-3">{member.role}</p>

                {/* Bio */}
                {member.bio && (
                  <p className="text-foreground/70 text-sm mb-4">{member.bio}</p>
                )}

                {/* Social Links */}
                <div className="flex gap-3 justify-center pt-4 border-t border-blue-500/10">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Members Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Active Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="cyber-card group text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all p-4"
              >
                {/* Avatar or Image */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-full object-cover border-2 border-blue-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}

                {/* Name and Role */}
                <h3 className="font-semibold mb-1 group-hover:text-blue-300 transition-colors text-sm">
                  {member.name}
                </h3>
                <p className="text-blue-300 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Are you passionate about cybersecurity? We're always looking for dedicated members to join our team. Whether you're interested in leadership roles or want to contribute as an active member, there's a place for you!
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Ethical Hacking</h3>
              <p className="text-foreground/70">
                We practice and promote ethical hacking principles and responsible disclosure.
              </p>
            </div>
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-foreground/70">
                We believe in the power of teamwork and knowledge sharing within our community.
              </p>
            </div>
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-foreground/70">
                We stay updated with the latest cybersecurity trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

