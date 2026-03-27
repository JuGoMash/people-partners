import { useState } from "react";

export default function FounderFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const qualifications = [
    "Master of Social Science (Sociology)",
    "Bachelor of Social Science (Honours) – Sociology",
    "Bachelor of Social Science (Human Resources Management)",
    "Certificate in Strategic Human Resources",
    "Certificate in Labour Relations for Leaders",
    "Certificate in People Analytics | Talent Management",
    "Certificate in Project Management Foundations",
  ];

  return (
    <div
      className="h-full cursor-pointer w-full"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="w-full h-full rounded-lg overflow-hidden relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {/* Front Side - Photo */}
        <div
          className="w-full h-full rounded-lg overflow-hidden absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2Fc85e12e4ecf3497eafe487bc60ed8b9a?format=webp&width=800&height=1200"
            alt="Gabriel Mapetere, Founder & Director"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Gabriel Mapetere</h3>
            <p className="text-yellow-400 font-semibold text-sm">Founder & Director</p>
            <p className="text-white/80 text-xs mt-3">Click to view qualifications</p>
          </div>
        </div>

        {/* Back Side - Qualifications */}
        <div
          className="w-full h-full rounded-lg p-8 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex flex-col justify-center absolute inset-0 overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h4 className="font-bold text-xl mb-6 text-primary">Qualifications & Certifications</h4>
            <ul className="space-y-3 text-sm">
              {qualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">{qual}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-xs mt-6">Click to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
