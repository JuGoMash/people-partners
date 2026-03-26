import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ComplianceAdvisory() {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Compliance Advisory</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Keep your business protected with comprehensive labour law and HR compliance guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Compliance at Every Level</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In South Africa, labour law compliance is non-negotiable. Non-compliance can result in hefty fines, reputational damage, and costly litigation. Our compliance advisory service ensures your business operates within all legal frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We conduct thorough audits, identify gaps, and provide actionable recommendations to align your practices with current legislation. From the Labour Relations Act to employment equity requirements, we've got you covered.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Labour Law Audits</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive review of your HR practices against current legislation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Employment Equity</h3>
                    <p className="text-sm text-muted-foreground">Strategic guidance on equity targets, employment practices, and reporting.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Policy Alignment</h3>
                    <p className="text-sm text-muted-foreground">Ensure all HR policies align with legal requirements and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Compliance Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Labour Relations Act (LRA)</h3>
                <p className="text-muted-foreground mb-4">
                  We help you navigate employee rights, collective bargaining, dispute resolution, and workplace democracy requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Employee rights compliance</li>
                  <li>✓ Union recognition and negotiation</li>
                  <li>✓ Dispute handling procedures</li>
                  <li>✓ Workplace forums setup</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Basic Conditions of Employment Act (BCEA)</h3>
                <p className="text-muted-foreground mb-4">
                  From working hours to annual leave and remuneration, we ensure compliance with all conditions of employment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Working hours compliance</li>
                  <li>✓ Leave management and benefits</li>
                  <li>✓ Wage protection and remuneration</li>
                  <li>✓ Termination procedures</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Employment Equity Act (EEA)</h3>
                <p className="text-muted-foreground mb-4">
                  Achieve employment equity targets while building a diverse and inclusive workplace that reflects South Africa.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Equity plan development</li>
                  <li>✓ Designated group targets</li>
                  <li>✓ Annual compliance reporting (EEA4)</li>
                  <li>✓ Diversity and inclusion strategies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Other Compliance Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We also cover occupational health and safety, skills development, and other regulatory requirements affecting your workforce.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ OHSA and workplace safety</li>
                  <li>✓ Skills Development compliance</li>
                  <li>✓ HR documentation audits</li>
                  <li>✓ Contract review and drafting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Ensure Your Business is Compliant</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a compliance audit today and discover any gaps in your labour law and HR practices.
            </p>
            <a href="tel:0786063749" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Schedule an Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
