export default function ClientsCarousel() {
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
    <div className="mt-16 p-8 bg-card rounded-lg border border-border overflow-hidden">
      <p className="text-sm font-semibold text-primary mb-8">CLIENTS INCLUDE:</p>
      
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
  );
}
