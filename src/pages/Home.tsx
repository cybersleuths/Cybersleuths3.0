import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Security Workshop",
      date: "Nov 15, 2024",
      description: "Learn about common web vulnerabilities and how to prevent them.",
    },
    {
      id: 2,
      title: "CTF Competition",
      date: "Nov 22, 2024",
      description: "Capture the Flag competition for all skill levels.",
    },
    {
      id: 3,
      title: "Ethical Hacking Bootcamp",
      date: "Dec 1, 2024",
      description: "Intensive bootcamp on ethical hacking practices.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text animate-float">
              CyberSleuths
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
              Empowering the Next Generation of Ethical Hackers
            </p>
            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
              Join our college cybersecurity club to explore the fascinating world of ethical hacking, learn cutting-edge security practices, and collaborate with like-minded tech enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXgPgQGGAy36isoA4GkUeaNFhL-31N3YGevQplx2sv3Fp9VA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button flex items-center justify-center gap-2"
              >
                Join Us Now
                <ArrowRight size={20} />
              </a>
              <Link
                href="/events"
                className="cyber-button-outline flex items-center justify-center gap-2"
              >
                Explore Events
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
              <div className="cyber-card">
                <div className="text-3xl font-bold neon-text">100+</div>
                <div className="text-sm text-foreground/70">Active Members</div>
              </div>
              <div className="cyber-card">
                <div className="text-3xl font-bold neon-text">5+</div>
                <div className="text-sm text-foreground/70">Events Hosted</div>
              </div>
              <div className="cyber-card">
                <div className="text-3xl font-bold neon-text">100%</div>
                <div className="text-sm text-foreground/70">Ethical Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-t border-blue-500/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About CyberSleuths</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                CyberSleuths is an official college cybersecurity club dedicated to fostering knowledge, skills, and passion for ethical hacking and cybersecurity. We believe in learning through hands-on experience, collaboration, and real-world challenges.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Our mission is to create a community where students can explore cybersecurity concepts, participate in competitions, and develop the expertise needed for careers in information security.
              </p>
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                Meet Our Team <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-card">
                <Shield size={32} className="text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-sm text-foreground/70">Ethical hacking and responsible disclosure</p>
              </div>
              <div className="cyber-card">
                <Users size={32} className="text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-foreground/70">Learn together, grow together</p>
              </div>
              <div className="cyber-card">
                <Zap size={32} className="text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-foreground/70">Stay ahead of emerging threats</p>
              </div>
              <div className="cyber-card">
                <Shield size={32} className="text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Learning</h3>
                <p className="text-sm text-foreground/70">Continuous skill development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Video</h2>
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden border border-blue-500/30 hover:border-purple-500/50 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3MO2wfMUHZc"
                title="CyberSleuths Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 border-t border-blue-500/20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Past Events</h2>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="cyber-card group">
                <div className="mb-4">
                  <div className="text-sm text-blue-300 font-semibold">{event.date}</div>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-300 transition-colors">
                    {event.title}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">{event.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-semibold"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join CyberSleuths?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or an experienced hacker, there's a place for you in our community. Register now and start your cybersecurity journey!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXgPgQGGAy36isoA4GkUeaNFhL-31N3YGevQplx2sv3Fp9VA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2"
          >
            Register Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}

