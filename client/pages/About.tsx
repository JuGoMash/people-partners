import { ArrowLeft, Target, Heart, Users, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Faf68e484decf46379ccbfc0f4be45e74%2Fb6e0e84606394ae4926dc19e95311903?format=webp&width=100"
              alt="GTK People Partners"
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-lg hidden sm:inline group-hover:text-primary transition">GTK</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-primary text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About GTK People Partners</h1>
            <p className="text-xl text-muted-foreground">
              Protecting businesses and empowering people through expert HR and labour law consulting since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GTK People Partners was founded on a simple belief: that growing businesses need expert HR and labour law support that doesn't require hiring an expensive in-house team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over a decade of experience across multiple industries and sectors, we've worked with startups, SMEs, and established organizations to help them navigate the complexities of people management, labour law compliance, and HR strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be trusted by leading businesses across South Africa to protect their organizations, empower their people, and drive sustainable growth through sound people practices and legal compliance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Our Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We specialize in serving startups and growing businesses (SMEs). We understand your pace, your pressures, and your unique needs. Our solutions are practical, scalable, and cost-effective — with no enterprise overhead.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Our Approach</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We don't believe in one-size-fits-all solutions. Every business is unique, and so are your HR and labour law needs. We take the time to understand your business, your people, and your challenges before designing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Vision</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To protect growing businesses through expert HR and labour law consulting, while empowering people through sound people practices and compliance, enabling sustainable growth and success.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted HR and labour law partner of choice for startups and growing businesses in South Africa, known for our expertise, integrity, and commitment to our clients' success.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Values</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Integrity</strong> - Honest, ethical, and transparent in all we do</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Excellence</strong> - Delivering quality solutions that make a difference</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Practicality</strong> - Solutions designed for real-world implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>People-Centric</strong> - Always focused on protecting people and businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Meet Our Founder</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2Fc85e12e4ecf3497eafe487bc60ed8b9a?format=webp&width=800&height=1200"
                alt="Gabriel Mapetere, Founder & CEO"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg flex flex-col justify-end p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                    Founder & CEO
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Gabriel Mapetere</h3>

                <div className="flex items-center gap-2 mb-6">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/gabrielmapetere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-blue-300 transition"
                  >
                    linkedin.com/in/gabrielmapetere
                  </a>
                </div>

                <a
                  href="https://www.linkedin.com/in/gabrielmapetere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition w-fit"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Gabriel's Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gabriel brings over a decade of hands-on HR and Industrial Relations experience spanning multiple industries—including security services, BPO, call centres, fleet rental, ride-hailing, educational institutions, and the motor industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Throughout his career, Gabriel has been passionate about solving real-world people problems and protecting businesses through sound labour relations and HR practices. His experience across diverse sectors has given him a unique perspective on what works in different business environments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2016, Gabriel founded GTK People Partners with a mission: to make expert HR and labour law consulting accessible and affordable for startups and growing businesses. Today, the firm is proud to serve multiple sectors across South Africa.
              </p>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-bold text-lg mb-4 text-primary">Qualifications & Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Master of Social Science (Sociology)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bachelor of Social Science (Honours) – Sociology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bachelor of Social Science (Human Resources Management)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certificate in Strategic Human Resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certificate in Labour Relations for Leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certificate in People Analytics | Talent Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certificate in Project Management Foundations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Work With GTK?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">Deep Labour Law Expertise</h3>
              <p className="text-muted-foreground">
                We don't just know HR best practices—we specialize in South African labour law. We stay current with legislative changes and provide guidance grounded in legal reality.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">Built for Growing Businesses</h3>
              <p className="text-muted-foreground">
                We understand your pace and pressures. Our solutions are practical, scalable, and designed for organizations without large HR budgets.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">Multi-Sector Experience</h3>
              <p className="text-muted-foreground">
                We've worked across 5+ sectors, bringing best practices and lessons learned from diverse industries to your business.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">Flexible Engagement Models</h3>
              <p className="text-muted-foreground">
                Whether you need ongoing support, project-based work, or ad hoc advice, we have flexible engagement models that fit your budget and needs.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">Proactive, Not Reactive</h3>
              <p className="text-muted-foreground">
                We don't just fix problems; we help you build HR infrastructure that prevents problems before they arise.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-bold text-xl mb-4 text-primary">People-Centric Approach</h3>
              <p className="text-muted-foreground">
                We believe in protecting both businesses AND people. Fairness and compliance go hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With GTK?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need immediate HR support or want to discuss building comprehensive people strategies for your growing business, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0786063749" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition inline-block">
              Get in Touch
            </a>
            <Link to="/" className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
