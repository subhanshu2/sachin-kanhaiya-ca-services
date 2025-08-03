import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  FileText, 
  Building2, 
  Shield, 
  TrendingUp, 
  Globe, 
  Users, 
  Receipt,
  Percent,
  Gift,
  CreditCard,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Income Tax Services",
      description: "Comprehensive income tax solutions for individuals and businesses",
      features: [
        "ITR filing for all categories",
        "Tax planning & optimization",
        "Assessment & scrutiny handling",
        "Representation before authorities",
        "Capital gains planning"
      ],
      link: "/services/income-tax",
      color: "text-blue-600",
      popular: true
    },
    {
      icon: Percent,
      title: "GST Services",
      description: "Complete GST compliance and advisory services",
      features: [
        "GST registration & migration",
        "Monthly & annual returns filing",
        "GST reconciliation",
        "Input tax credit optimization",
        "GST advisory & structuring"
      ],
      link: "/services/gst",
      color: "text-green-600",
      popular: true
    },
    {
      icon: Building2,
      title: "Company Incorporation",
      description: "End-to-end company formation and setup services",
      features: [
        "Private Limited & LLP registration",
        "MOA, AOA drafting",
        "PAN, TAN, DIN assistance",
        "Post-incorporation compliance",
        "ROC filings & registrations"
      ],
      link: "/services/incorporation",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Audit Services",
      description: "Professional audit services with comprehensive reporting",
      features: [
        "Statutory audit",
        "Internal audit",
        "Stock audit",
        "Forensic audit",
        "Risk assessment & controls"
      ],
      link: "/services/audit",
      color: "text-red-600"
    },
    {
      icon: TrendingUp,
      title: "Corporate Finance",
      description: "Strategic financial planning and advisory services",
      features: [
        "Financial planning & budgeting",
        "Project report preparation",
        "Bank loan documentation",
        "Business valuation",
        "Financial restructuring"
      ],
      link: "/services/corporate-finance",
      color: "text-orange-600"
    },
    {
      icon: Globe,
      title: "NRI Services",
      description: "Specialized services for Non-Resident Indians",
      features: [
        "NRI tax advisory & filing",
        "FEMA & RBI compliance",
        "DTAA advisory",
        "Remittance guidance",
        "NRO/NRE account structuring"
      ],
      link: "/services/nri-services",
      color: "text-teal-600"
    },
    {
      icon: FileText,
      title: "Accounting Supervision",
      description: "Professional oversight of accounting processes",
      features: [
        "Accounting review & oversight",
        "Ledger maintenance supervision",
        "Compliance checks",
        "MIS & financial statements",
        "Staff coordination"
      ],
      link: "/services/accounting",
      color: "text-indigo-600"
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Complete payroll processing and compliance",
      features: [
        "Monthly payroll processing",
        "TDS deduction & Form 16",
        "Employee reimbursements",
        "PF, ESI, PT management",
        "HR compliance reporting"
      ],
      link: "/services/payroll",
      color: "text-pink-600"
    },
    {
      icon: Receipt,
      title: "TDS Services",
      description: "Comprehensive TDS management and compliance",
      features: [
        "TDS calculation & payment",
        "TDS returns filing",
        "Form 16 & 16A generation",
        "TDS advisory",
        "Compliance management"
      ],
      link: "/services/tds",
      color: "text-yellow-600"
    },
    {
      icon: Gift,
      title: "Corporate Services",
      description: "Complete corporate compliance and legal services",
      features: [
        "Statutory registers maintenance",
        "Board resolutions",
        "Company law advisory",
        "Legal documentation",
        "Annual return filing"
      ],
      link: "/services/corporate",
      color: "text-cyan-600"
    },
    {
      icon: CreditCard,
      title: "Benefits of Outsourcing",
      description: "Why choose professional financial outsourcing",
      features: [
        "Cost-effective solutions",
        "Expert guidance",
        "Focus on core business",
        "Timely compliance",
        "Scalable services"
      ],
      link: "/services/outsourcing",
      color: "text-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional CA Services</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Comprehensive financial solutions tailored to your business needs. 
            Expert guidance with personalized attention for over 15 years.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-success text-white">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <Link to={service.link} className="flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't see exactly what you're looking for? I provide customized financial 
              solutions tailored to your specific business requirements.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;