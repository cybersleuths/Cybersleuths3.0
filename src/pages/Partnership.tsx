import { CheckCircle, Award, Users, Zap } from "lucide-react";

export default function Partnership() {
  const benefits = [
    {
      icon: <Award size={32} />,
      title: "Certification Programs",
      description: "Access to ISOEH certification courses and training materials",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Mentorship",
      description: "Learn from certified ethical hackers and industry professionals",
    },
    {
      icon: <Zap size={32} />,
      title: "Advanced Workshops",
      description: "Exclusive workshops on cutting-edge cybersecurity topics",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Career Opportunities",
      description: "Job placement assistance and career guidance from ISOEH network",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "Joint Hackathon",
      description: "Successfully organized a 24-hour hackathon with 200+ participants",
    },
    {
      year: "2024",
      title: "Certification Workshop",
      description: "50+ students completed ISOEH certification programs",
    },
    {
      year: "2023",
      title: "Partnership Established",
      description: "Official partnership agreement signed with ISOEH",
    },
    {
      year: "2023",
      title: "Training Program Launch",
      description: "Launched comprehensive ethical hacking training program",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">CyberSleuths X ISOEH</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Strategic partnership with the Indian School of Ethical Hacking
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Partnership</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                CyberSleuths is proud to collaborate with the Indian School of Ethical Hacking (ISOEH), a leading organization in cybersecurity education and training. This strategic partnership brings world-class resources and expertise to our college community.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Through this collaboration, our members gain access to industry-standard training programs, certification courses, and mentorship from certified ethical hackers. ISOEH's commitment to ethical hacking education aligns perfectly with our club's mission.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                  <span>Official ISOEH Partner Institution</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                  <span>Access to Certification Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                  <span>Expert Training and Mentorship</span>
                </div>
              </div>
            </div>

            {/* ISOEH Logo Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold neon-text mb-4">ISOEH</div>
                  <p className="text-foreground/70">Indian School of Ethical Hacking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="flex justify-center mb-4 text-blue-400 group-hover:text-purple-400 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Partnership Milestones</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="cyber-card flex-1">
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-foreground/70">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">ISOEH Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Certified Ethical Hacker (CEH)",
                description: "Comprehensive course covering all aspects of ethical hacking and penetration testing",
                duration: "40 hours",
              },
              {
                title: "Certified Network Security Professional (CNSP)",
                description: "Advanced network security concepts and implementation strategies",
                duration: "35 hours",
              },
              {
                title: "Web Application Security",
                description: "In-depth training on OWASP Top 10 and secure coding practices",
                duration: "30 hours",
              },
              {
                title: "Incident Response & Forensics",
                description: "Learn to investigate security incidents and collect digital evidence",
                duration: "25 hours",
              },
            ].map((program, index) => (
              <div key={index} className="cyber-card">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-foreground/70 mb-4">{program.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-blue-500/10">
                  <span className="text-sm text-blue-300 font-semibold">{program.duration}</span>
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition-colors font-semibold text-sm"
                  >
                    Enroll →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in ISOEH Programs?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            As a CyberSleuths member, you get special discounts and priority access to ISOEH training programs. Contact us to learn more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button"
            >
              Enroll Now
            </a>
            <a
              href="https://www.isoeh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-outline"
            >
              Visit ISOEH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

