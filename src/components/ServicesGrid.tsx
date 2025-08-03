import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  CreditCard
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Income Tax",
      description: "ITR filing, tax planning, assessment handling, and representation before authorities.",
      link: "/services/income-tax",
      color: "text-blue-600"
    },
    {
      icon: Percent,
      title: "GST Services",
      description: "GST registration, filing, reconciliation, and comprehensive advisory services.",
      link: "/services/gst",
      color: "text-green-600"
    },
    {
      icon: Building2,
      title: "Company Incorporation",
      description: "Complete incorporation services for Private Limited, LLP, and OPC companies.",
      link: "/services/incorporation",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Audit Services",
      description: "Statutory, internal, stock audits with comprehensive risk assessment.",
      link: "/services/audit",
      color: "text-red-600"
    },
    {
      icon: TrendingUp,
      title: "Corporate Finance",
      description: "Financial planning, project reports, business valuation, and restructuring.",
      link: "/services/corporate-finance",
      color: "text-orange-600"
    },
    {
      icon: Globe,
      title: "NRI Services",
      description: "Complete tax and compliance solutions for Non-Resident Indians.",
      link: "/services/nri-services",
      color: "text-teal-600"
    },
    {
      icon: FileText,
      title: "Accounting Supervision",
      description: "Professional oversight and review of internal accounting processes.",
      link: "/services/accounting",
      color: "text-indigo-600"
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Complete payroll processing, TDS management, and compliance reporting.",
      link: "/services/payroll",
      color: "text-pink-600"
    },
    {
      icon: Receipt,
      title: "TDS Services",
      description: "TDS calculation, filing, payment, and Form 16 generation services.",
      link: "/services/tds",
      color: "text-yellow-600"
    },
    {
      icon: Gift,
      title: "Corporate Services",
      description: "Statutory compliance, board resolutions, and company law advisory.",
      link: "/services/corporate",
      color: "text-cyan-600"
    },
    {
      icon: CreditCard,
      title: "Benefits of Outsourcing",
      description: "Cost-effective solutions, expert guidance, and scalable business support.",
      link: "/services/outsourcing",
      color: "text-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive CA Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert financial and legal solutions tailored to meet your business needs. 
            Professional service with personalized attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 bg-background"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;