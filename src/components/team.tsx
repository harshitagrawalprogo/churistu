import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  image?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Ankit Sharma",
      role: "Founder",
      linkedin: "", // Add LinkedIn URL when available
      image: "", // Add image URL here like "/images/ankit.jpg"
    },
    {
      name: "Harshit Agrawal",
      role: "CTO",
      linkedin: "https://www.linkedin.com/in/harshitagrawal700/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHGIbaTVhguDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715881696505?e=1762992000&v=beta&t=e1czTEudo0e5dvAVxMwXcPBIu2_cG3NHwU1T3vpNLjg", // Add image URL here like "/images/harshit.jpg"
    },
  ];

  return (
    <section id="team" className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-law-charcoal mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The dedicated professionals driving innovation and excellence
        </p>
      </div>

      {/* Marquee with cards */}
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-law-cream rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              style={{ minWidth: "350px", display: "inline-block" }}
            >
              {/* Profile Image - Shows actual image if provided, otherwise shows initials */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
              ) : null}

              {/* Fallback Initials (shown when no image or image fails) */}
              <div
                className={`w-32 h-32 mx-auto mb-4 bg-law-charcoal rounded-full flex items-center justify-center text-white text-4xl font-bold ${
                  member.image ? "hidden" : ""
                }`}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="text-2xl font-bold text-law-charcoal mb-2">
                {member.name}
              </h3>

              <p className="text-law-gold font-semibold mb-4">{member.role}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-law-charcoal hover:text-law-gold transition-colors"
                >
                  <Linkedin size={24} />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default Team;
