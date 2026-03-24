import { ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HRStrategy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
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
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">HR Strategy & Design</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Build scalable HR infrastructure that drives sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Strategic HR for Growth</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As your business grows, your HR infrastructure must grow with it. We design and implement comprehensive HR strategies that align your people practices with your business objectives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From organizational design to performance management systems, we create the frameworks that enable your team to perform at their best while protecting your business legally and operationally.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">HR Strategy Formulation</h3>
                    <p className="text-sm text-muted-foreground">Develop a comprehensive HR strategy aligned with your business goals.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Organizational Design</h3>
                    <p className="text-sm text-muted-foreground">Structure your organization for efficiency and effectiveness.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Performance Management</h3>
                    <p className="text-sm text-muted-foreground">Implement systems that motivate, develop, and retain your talent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-8">Our HR Strategy Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">HR Strategy Formulation</h3>
                <p className="text-muted-foreground mb-4">
                  We work with leadership to understand your business vision and develop a people strategy that supports it. This includes setting HR objectives, identifying key talent needs, and planning for talent development and retention.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Strategy workshops and planning sessions</li>
                  <li>✓ Talent gap analysis</li>
                  <li>✓ Compensation benchmarking</li>
                  <li>✓ Workforce planning</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Organizational Design & Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Structure matters. We help you design organizational structures that are efficient, clear, and support your business objectives. Whether you're scaling up or restructuring, we create designs that minimize conflict and maximize productivity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Organization structure design</li>
                  <li>✓ Role profiling and job descriptions</li>
                  <li>✓ Reporting line clarification</li>
                  <li>✓ Change management for restructuring</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Performance Management Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Performance management is about more than just ratings. We design systems that clarify expectations, support development, enable feedback, and drive accountability while remaining fair and legally defensible.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ KPI and objective setting</li>
                  <li>✓ Performance appraisal framework design</li>
                  <li>✓ Manager coaching on feedback</li>
                  <li>✓ Development planning systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Change Management</h3>
                <p className="text-muted-foreground mb-4">
                  Organizational change is challenging. We guide you through restructurings, role changes, and process improvements while managing the people aspects that make or break change initiatives.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Change strategy and communication</li>
                  <li>✓ Stakeholder engagement</li>
                  <li>✓ Transition management</li>
                  <li>✓ Staff support and coaching</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Policy Development</h3>
                <p className="text-muted-foreground mb-4">
                  Your policies set the tone for your workplace culture. We develop comprehensive, legally sound policies that protect your business while supporting a positive work environment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Policy framework development</li>
                  <li>✓ Handbook creation and updates</li>
                  <li>✓ Compliance alignment</li>
                  <li>✓ Communication and training</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">HR Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Proper documentation is critical. From contracts to disciplinary files to performance records, we ensure your documentation is complete, professional, and legally defensible.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Employment contracts</li>
                  <li>✓ Offer letters and engagement docs</li>
                  <li>✓ Record keeping systems</li>
                  <li>✓ Documentation audits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Build Strategic HR Infrastructure</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's develop an HR strategy that drives your business growth and builds a high-performing organization.
            </p>
            <a href="tel:0786063749" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Discuss Your Needs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
