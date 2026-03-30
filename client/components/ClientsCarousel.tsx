import { useState } from "react";
import { X } from "lucide-react";

export default function ClientsCarousel() {
  const [showAllClients, setShowAllClients] = useState(false);

  const clients = [
    {
      name: "New Africa",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F17f0ba0242ca4a8aae7cfcbc85d899c3?format=webp&width=800&height=1200",
    },
    {
      name: "River Horse Consulting",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F378a1b1557a049ebabcdfe5c3ddd85c3?format=webp&width=800&height=1200",
    },
    {
      name: "Saifleet",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F34401f4548f045d392a9d88c8183a00e?format=webp&width=800&height=1200",
    },
    {
      name: "The Unclogged",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F58c4b6d2912842eea7ef3879df826a28?format=webp&width=800&height=1200",
    },
    {
      name: "Mimi Beauty",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F60b6b09b63c0479ba5d41a8c0ef0c89d?format=webp&width=800&height=1200",
    },
  ];

  // Duplicate clients for seamless loop
  const extendedClients = [...clients, ...clients];

  return (
    <>
      <div className="mt-16 p-8 bg-card rounded-lg border border-border overflow-hidden cursor-pointer hover:border-primary transition" onClick={() => setShowAllClients(true)}>
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-primary">CLIENTS INCLUDE:</p>
          <span className="text-xs text-muted-foreground hover:text-primary transition">View all →</span>
        </div>

        <div className="relative overflow-hidden">
          {/* Mask gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex carousel-belt">
            {extendedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center px-6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal showing all clients */}
      {showAllClients && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Clients We've Worked With</h2>
              <button
                onClick={() => setShowAllClients(false)}
                className="p-2 hover:bg-card rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 border border-border flex flex-col items-center justify-center hover:border-primary transition group"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 mb-4"
                    />
                    <p className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition">
                      {client.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">We're proud to have partnered with {clients.length}+ clients</span> across various sectors, helping them navigate labour law complexities and build stronger people practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
