import { ArrowLeft, Briefcase, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/use-seo";

export default function TrainingDevelopment() {
  useSEO({
    title: 'Training & Development - GTK People Partners',
    description: 'Custom soft skills training, manager coaching, IR awareness programs, and employee development for South African businesses.',
  });
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
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">Training & Development</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Empower your team with skills and knowledge that drive organizational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Develop Your People</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your people are your competitive advantage. We design and deliver training and development programs that build skills, strengthen leadership, and create a culture of continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From soft skills to manager coaching to induction programs, we tailor solutions to your organizational needs and culture. Whether it's individual development or team capability building, we've got you covered.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Soft Skills Programmes</h3>
                    <p className="text-sm text-muted-foreground">Build leadership, communication, and interpersonal capabilities.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Manager Coaching</h3>
                    <p className="text-sm text-muted-foreground">Develop your managers into effective leaders and team builders.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Induction Design</h3>
                    <p className="text-sm text-muted-foreground">Make a great first impression and set new hires up for success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Training & Development Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Soft Skills Programmes</h3>
                <p className="text-muted-foreground mb-4">
                  Soft skills are the foundation of workplace effectiveness. We design and deliver targeted programmes that build communication, teamwork, leadership, and problem-solving capabilities across your organization.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Leadership development</li>
                  <li>✓ Communication skills training</li>
                  <li>✓ Conflict resolution and negotiation</li>
                  <li>✓ Team building and collaboration</li>
                  <li>✓ Emotional intelligence training</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Manager Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  Managers set the tone for your organization. We provide coaching that helps managers develop their teams, give effective feedback, manage performance, and create positive work environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ One-on-one coaching sessions</li>
                  <li>✓ Team dynamics coaching</li>
                  <li>✓ Performance management coaching</li>
                  <li>✓ Conflict and difficult conversation coaching</li>
                  <li>✓ Strategic thinking development</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Custom Training Modules</h3>
                <p className="text-muted-foreground mb-4">
                  We develop customized training content tailored to your industry, organization, and specific needs. Whether technical or behavioural, we design engaging and effective learning experiences.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Content development and customization</li>
                  <li>✓ Blended learning solutions</li>
                  <li>✓ Facilitation and delivery</li>
                  <li>✓ Virtual and in-person options</li>
                  <li>✓ Learning evaluation and assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Induction Design & Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  First impressions matter. We design comprehensive induction programmes that welcome new employees, provide necessary information, build relationships, and accelerate time-to-productivity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Induction programme design</li>
                  <li>✓ Onboarding process development</li>
                  <li>✓ New hire orientation delivery</li>
                  <li>✓ Buddy/mentoring programme setup</li>
                  <li>✓ 30/60/90-day check-ins</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Industrial Relations Awareness Training</h3>
                <p className="text-muted-foreground mb-4">
                  Help your team understand labour law, employee rights, and best practices. We provide training that makes legal concepts accessible and practical for your workforce.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Labour law fundamentals</li>
                  <li>✓ Employee rights and responsibilities</li>
                  <li>✓ Disciplinary procedures overview</li>
                  <li>✓ Union recognition and engagement</li>
                  <li>✓ Workplace conduct and ethics</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-primary">Organizational Development</h3>
                <p className="text-muted-foreground mb-4">
                  Build organizational capability through structured development initiatives. From change readiness to cultural transformation, we help your organization evolve and thrive.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Change readiness programmes</li>
                  <li>✓ Culture transformation initiatives</li>
                  <li>✓ Team effectiveness workshops</li>
                  <li>✓ Strategic thinking sessions</li>
                  <li>✓ Succession planning programmes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Invest in Your People</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's design a training and development programme that builds the capabilities your team needs to succeed.
            </p>
            <a href="tel:0786063749" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Plan Your Programme
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
