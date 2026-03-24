import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Recruitment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-primary-foreground" />
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
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">360 Recruitment</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Find the right talent and build high-performing teams that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">End-to-End Recruitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Finding the right talent takes more than just posting a job. Our 360 recruitment approach covers every stage of the recruitment cycle—from role profiling to candidate selection to onboarding support.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't just fill positions; we help you build high-performing teams aligned with your business culture and values. With access to extensive candidate networks and proven assessment methods, we consistently deliver quality hires.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Full-Cycle Recruitment</h3>
                    <p className="text-sm text-muted-foreground">Complete recruitment management from planning to placement.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Candidate Screening</h3>
                    <p className="text-sm text-muted-foreground">Expert shortlisting and initial assessment of candidates.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Talent Pool Planning</h3>
                    <p className="text-sm text-muted-foreground">Build talent pipelines for future hiring needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Recruitment Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Role Profiling & Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Before we start recruiting, we understand your needs. We develop detailed role profiles, define success criteria, and plan the recruitment strategy that will find the right fit.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Detailed role profiling and scoping</li>
                  <li>✓ Success criteria definition</li>
                  <li>✓ Candidate persona development</li>
                  <li>✓ Recruitment timeline and strategy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Candidate Sourcing</h3>
                <p className="text-muted-foreground mb-4">
                  We leverage multiple sourcing channels to find quality candidates. From our extensive networks to job boards to direct outreach, we ensure a deep candidate pool.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Multi-channel job posting</li>
                  <li>✓ Active candidate outreach</li>
                  <li>✓ Passive candidate engagement</li>
                  <li>✓ Referral programme management</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Candidate Screening & Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Quality matters. We screen candidates thoroughly against your criteria, conduct initial interviews, and perform assessment testing to identify the strongest prospects.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ CV screening and shortlisting</li>
                  <li>✓ Initial phone interviews</li>
                  <li>✓ Competency assessments</li>
                  <li>✓ Skills testing and evaluation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Interview Coaching & Coordination</h3>
                <p className="text-muted-foreground mb-4">
                  We prepare you for successful interviews and manage the interview process. From interview briefings to feedback collection to reference checking, we handle the logistics.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Interview preparation coaching</li>
                  <li>✓ Interview question development</li>
                  <li>✓ Interview coordination and scheduling</li>
                  <li>✓ Reference and background checks</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Candidate Selection & Offer Support</h3>
                <p className="text-muted-foreground mb-4">
                  We help you make informed selection decisions, negotiate offers with candidates, and manage the final stages of recruitment to secure your preferred candidate.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Selection recommendation</li>
                  <li>✓ Offer letter development</li>
                  <li>✓ Negotiation support</li>
                  <li>✓ Final documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Talent Pool Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Smart organizations plan for future talent needs. We help you build and maintain talent pools for key roles, making future recruitment faster and more cost-effective.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Succession planning</li>
                  <li>✓ Talent pool development</li>
                  <li>✓ Ongoing candidate engagement</li>
                  <li>✓ Talent market analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Choose GTK for Recruitment?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Extensive Networks</h4>
                  <p className="text-sm text-muted-foreground">Access to deep candidate networks across multiple industries and sectors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Proven Assessment</h4>
                  <p className="text-sm text-muted-foreground">Robust assessment methods that identify quality candidates and cultural fit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Speed & Efficiency</h4>
                  <p className="text-sm text-muted-foreground">Fast turnaround times without compromising on candidate quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Full Transparency</h4>
                  <p className="text-sm text-muted-foreground">Regular updates and open communication throughout the recruitment process.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Find Your Next Great Hire</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to hire? Let's work together to find the talent that will strengthen your team and drive your business forward.
            </p>
            <a href="tel:0786063749" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Start Your Search
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
