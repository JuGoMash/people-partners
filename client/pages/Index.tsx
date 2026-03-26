import { ArrowRight, Scale, Shield, Users, TrendingUp, Briefcase, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
              <Users className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg group-hover:text-primary transition">GTK</span>
              <span className="text-xs text-primary font-semibold">People Partners</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="text-sm hover:text-primary transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Services</a>
            <a href="#why-us" onClick={(e) => handleSmoothScroll(e, "why-us")} className="text-sm hover:text-primary transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Why GTK</a>
            <Link to="/about" className="text-sm hover:text-primary transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">About Us</Link>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-sm hover:text-primary transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Contact</a>
          </nav>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-sm cursor-pointer">
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Built for Growth
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Labour & HR Consulting
              <span className="text-primary"> Specialists</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              We don't just consult. We protect your business, power your people, and keep you compliant — so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                Get Expert Support <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition">
                Explore Services
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-16 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Sectors Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">SA</div>
                <div className="text-sm text-muted-foreground">Labour Law Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Full-Suite HR & Labour Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services tailored to your business size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Labour Relations */}
            <Link to="/services/labour-relations" className="bg-background rounded-lg p-6 border border-border hover:border-primary transition group hover:shadow-lg hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Labour Relations</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Disciplinary hearings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>CCMA representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Grievance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collective bargaining</span>
                </li>
              </ul>
            </Link>

            {/* Compliance Advisory */}
            <Link to="/services/compliance-advisory" className="bg-background rounded-lg p-6 border border-border hover:border-primary transition group hover:shadow-lg hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Compliance Advisory</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Labour law audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>LRA / BCEA / EEA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Employment equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Policy alignment</span>
                </li>
              </ul>
            </Link>

            {/* HR Strategy & Design */}
            <Link to="/services/hr-strategy" className="bg-background rounded-lg p-6 border border-border hover:border-primary transition group hover:shadow-lg hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">HR Strategy & Design</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>HR strategy formulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Org design & planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Performance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Change management</span>
                </li>
              </ul>
            </Link>

            {/* Training & Development */}
            <Link to="/services/training-development" className="bg-background rounded-lg p-6 border border-border hover:border-primary transition group hover:shadow-lg hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Training & Development</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Soft skills programmes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Manager coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Custom modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>IR awareness training</span>
                </li>
              </ul>
            </Link>

            {/* 360 Recruitment */}
            <Link to="/services/recruitment" className="bg-background rounded-lg p-6 border border-border hover:border-primary transition group hover:shadow-lg hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">360 Recruitment</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Full-cycle recruitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Role profiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Candidate screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Talent pool planning</span>
                </li>
              </ul>
            </Link>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12">
            All services available as retainer, project-based, or ad hoc engagements · Tailored to your business size and budget
          </p>
        </div>
      </section>

      {/* Why Choose GTK Section */}
      <section id="why-us" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Smart Choice for Growing Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Labour Law as a Core Strength</h3>
                  <p className="text-muted-foreground">
                    We don't just know HR — we specialize in labour law. From CCMA disputes to complex disciplinary proceedings, we give SMEs the same calibre of representation large corporates take for granted.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Outsource Without Compromise</h3>
                  <p className="text-muted-foreground">
                    Get senior HR and IR expertise on a flexible basis. No hiring costs, no overhead — just expert support that scales with your business needs and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">People + Process + Compliance</h3>
                  <p className="text-muted-foreground">
                    We align your people practices with your business goals while keeping you compliant. Every policy, every hearing, every document is built to protect you and your employees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Proactive, Not Just Reactive</h3>
                  <p className="text-muted-foreground">
                    We help you build the HR infrastructure that prevents problems before they arise — frameworks, policies, training, and systems designed for sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg border border-border">
            <p className="text-sm font-semibold text-primary mb-4">CLIENTS INCLUDE:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-muted-foreground">Excellent Security Services</div>
              <div className="text-muted-foreground">HEWI-Africa</div>
              <div className="text-muted-foreground">Saifleet Car Rental</div>
              <div className="text-muted-foreground">Mimi Beauty Studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Director Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our Director
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Gabriel Mapetere</h3>
                <p className="text-primary font-semibold mb-4">Founder & Director</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gabriel brings over a decade of hands-on HR and Industrial Relations experience spanning security services, BPO, call centres, fleet rental, ride-hailing, educational institutions, and the motor industry.
                  </p>
                  <p>
                    Known for a solutions-driven, legally grounded approach, he is passionate about protecting businesses and their people through sound people practices and labour law compliance.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-4">Qualifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Master of Social Science (Sociology)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Bachelor of Social Science (Honours) – Sociology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Bachelor of Social Science (Human Resources Management)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Certificate in Strategic Human Resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Certificate in Labour Relations for Leaders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Certificate in People Analytics | Talent Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Certificate in Project Management Foundations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Your business is growing. Your people challenges are real. GTK People Partners is your dedicated HR and labour law partner — protecting your business, empowering your people, and keeping you compliant every step of the way.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 border border-border text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Email</span>
                </div>
                <a href="mailto:info.gtkconsulting@gmail.com" className="text-primary hover:underline">
                  info.gtkconsulting@gmail.com
                </a>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Phone</span>
                </div>
                <a href="tel:0786063749" className="text-primary hover:underline">
                  078 606 3749
                </a>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-left">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Address</span>
                </div>
                <p className="text-muted-foreground">
                  20 Petroy Drive, Magaliessig, Jhb
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Web</span>
                </div>
                <a href="https://www.gtkconsulting.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.gtkconsulting.co.za
                </a>
              </div>
            </div>

            <a href="tel:0786063749" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Get Expert Support Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-bold">GTK People Partners</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Labour & HR Consulting Specialists
              </p>
              <p className="text-xs text-muted-foreground italic">
                "We work for you."
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-sm">
                <a href="https://linkedin.com/company/gtkconsulting" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  LinkedIn
                </a>
                <a href="https://instagram.com/gtk_consulting" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Instagram
                </a>
                <a href="https://tiktok.com/@gtk_consulting" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  TikTok
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-xs text-muted-foreground">
            <p>Built for Growth · Grounded in Law · Focused on People</p>
            <p className="mt-2">© 2025 GTK People Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
