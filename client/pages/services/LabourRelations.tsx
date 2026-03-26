import { ArrowLeft, Scale, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LabourRelations() {
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
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Labour Relations</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              End-to-end industrial relations support — from hearing room to CCMA, we stand with you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Labour Relations Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Labour relations is the cornerstone of our practice. With deep expertise in the Labour Relations Act (LRA), Basic Conditions of Employment Act (BCEA), and Employment Equity Act (EEA), we provide comprehensive support across all aspects of industrial relations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're navigating disciplinary procedures, managing disputes, or dealing with CCMA matters, our team has the experience and legal grounding to protect your business while maintaining fairness to your employees.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">CCMA Representation</h3>
                    <p className="text-sm text-muted-foreground">Full preparation and representation at conciliation, arbitration, and pre-arbitration conferences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Collective Bargaining</h3>
                    <p className="text-sm text-muted-foreground">Advisory support for union negotiations, recognition agreements, and collective agreements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Bargaining Council Support</h3>
                    <p className="text-sm text-muted-foreground">Representation and compliance across relevant sectoral bargaining councils including MCSSI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-8">Complete Service Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Disciplinary Hearings</h3>
                <p className="text-muted-foreground mb-4">
                  We chair, facilitate, and manage the full hearing process with procedural and substantive fairness. From charge sheet preparation to final outcomes, we ensure your disciplinary processes are legally sound and defensible.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Hearing coordination and scheduling</li>
                  <li>✓ Evidence preparation and witness management</li>
                  <li>✓ Professional chairing and mediation</li>
                  <li>✓ Fair outcomes and proper documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Documentation & Outcomes</h3>
                <p className="text-muted-foreground mb-4">
                  Proper documentation is critical in labour relations. We draft charge sheets, notices, hearing outcomes, and formal disciplinary records that stand up to scrutiny.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Charge sheet drafting and delivery</li>
                  <li>✓ Hearing outcome reports</li>
                  <li>✓ Disciplinary records and files</li>
                  <li>✓ Compliance documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Grievance Resolution</h3>
                <p className="text-muted-foreground mb-4">
                  Structured grievance processes that resolve disputes before they escalate to formal proceedings. Early intervention prevents costly litigation and preserves working relationships.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Grievance policy development</li>
                  <li>✓ Investigation facilitation</li>
                  <li>✓ Mediation and resolution</li>
                  <li>✓ Appeal management</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">CCMA & Litigation Support</h3>
                <p className="text-muted-foreground mb-4">
                  When disputes reach the CCMA or higher, you need expert representation. We provide full support from initial conciliation through arbitration and appeal.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Conciliation representation</li>
                  <li>✓ Arbitration preparation and appearance</li>
                  <li>✓ Pre-arbitration conference support</li>
                  <li>✓ Appeal considerations and strategy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Strengthen Your Labour Relations?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact GTK People Partners today to discuss your labour relations needs and how we can support your business.
            </p>
            <a href="tel:0786063749" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
