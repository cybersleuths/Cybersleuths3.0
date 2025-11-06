import { useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  description: string;
  type: "upcoming" | "past";
  image?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Web Security Workshop",
    date: "Nov 15, 2024",
    venue: "Tech Lab, Building A",
    description: "Learn about OWASP Top 10 vulnerabilities and practical defense strategies.",
    type: "upcoming",
  },
  {
    id: 2,
    title: "CTF Competition 2024",
    date: "Nov 22, 2024",
    venue: "Auditorium, Main Campus",
    description: "Capture the Flag competition with prizes. All skill levels welcome!",
    type: "upcoming",
  },
  {
    id: 3,
    title: "Ethical Hacking Bootcamp",
    date: "Dec 1-5, 2024",
    venue: "Computer Lab, Building C",
    description: "5-day intensive bootcamp covering penetration testing and network security.",
    type: "upcoming",
  },
  {
    id: 4,
    title: "Cryptography Fundamentals",
    date: "Dec 10, 2024",
    venue: "Classroom 301, Building B",
    description: "Deep dive into encryption algorithms and cryptographic protocols.",
    type: "upcoming",
  },
  {
    id: 5,
    title: "Malware Analysis Workshop",
    date: "Oct 20, 2024",
    venue: "Tech Lab, Building A",
    description: "Learn to analyze and reverse-engineer malware safely.",
    type: "past",
  },
  {
    id: 6,
    title: "Cybersecurity Awareness Month",
    date: "Oct 1-31, 2024",
    venue: "Multiple Locations",
    description: "Month-long awareness campaign with daily tips and challenges.",
    type: "past",
  },
  {
    id: 7,
    title: "Hackathon 2024",
    date: "Sep 15-16, 2024",
    venue: "Innovation Center",
    description: "24-hour hackathon focused on building secure applications.",
    type: "past",
  },
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 neon-text">Events & Competitions</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore our exciting events, workshops, and competitions designed to enhance your cybersecurity skills.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-blue-500/20">
        <div className="container">
          <div className="flex gap-4">
            {["all", "upcoming", "past"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as "all" | "upcoming" | "past")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  filter === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                    : "border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300"
                }`}
              >
                {tab === "all" ? "All Events" : tab === "upcoming" ? "Upcoming" : "Past"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="cyber-card group flex flex-col h-full">
                {/* Event Type Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === "upcoming"
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {event.type === "upcoming" ? "Upcoming" : "Past"}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm text-foreground/70 flex-1">
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-purple-400" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6">{event.description}</p>

                {/* CTA */}
                <div className="flex gap-3 pt-4 border-t border-blue-500/10">
                  {event.type === "upcoming" ? (
                    <>
                      <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm font-semibold text-center"
                      >
                        Register
                      </a>
                      <a
                        href="#"
                        className="flex-1 px-4 py-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors text-sm font-semibold text-center"
                      >
                        Details
                      </a>
                    </>
                  ) : (
                    <a
                      href="#"
                      className="w-full px-4 py-2 rounded-lg border border-blue-500/30 text-foreground/70 hover:border-purple-500/50 hover:text-blue-300 transition-colors text-sm font-semibold text-center"
                    >
                      View Photos
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 border-t border-blue-500/20 bg-slate-900/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 hover:border-purple-500/50 transition-all cursor-pointer group overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-foreground/40 group-hover:text-blue-300 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{i}</div>
                    <div className="text-sm">Photo</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-blue-500/20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Subscribe to our newsletter to get updates about upcoming events and competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 focus:border-blue-500/70 outline-none transition-colors text-foreground placeholder-foreground/50"
            />
            <button className="cyber-button whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

