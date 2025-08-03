import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, TrendingUp, Globe, Shield } from "lucide-react";

const About = () => {
  const qualifications = [
    "Chartered Accountant (ICAI Member)",
    "Bachelor of Commerce (B.Com)",
    "Certified in GST Laws & Procedures",
    "Expert in Income Tax & Corporate Law",
    "Specialized in International Taxation",
    "FEMA & RBI Compliance Expert"
  ];

  const experience = [
    {
      title: "Senior Tax Consultant",
      company: "Leading CA Firm",
      period: "2015 - 2020",
      description: "Managed complex tax cases for Fortune 500 companies and high-net-worth individuals."
    },
    {
      title: "Assistant Manager - Audit",
      company: "Big 4 Consulting Firm",
      period: "2012 - 2015",
      description: "Led statutory and internal audits for multinational corporations across various industries."
    },
    {
      title: "Tax Associate",
      company: "Boutique Tax Firm",
      period: "2009 - 2012",
      description: "Specialized in GST implementation and compliance for SMEs and startups."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all professional dealings"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering superior quality services that exceed client expectations"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Putting client needs first and building long-term partnerships"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging technology and modern practices for efficient solutions"
    },
    {
      icon: Globe,
      title: "Comprehensive",
      description: "Offering end-to-end financial solutions under one roof"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CA Sachin Kanhaiya</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Dedicated to providing exceptional financial services with integrity, 
            expertise, and personalized attention for over 15 years.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* About Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience in the field of taxation, audit, and corporate finance, 
                  I have had the privilege of serving diverse clients ranging from individual taxpayers to 
                  large corporations. My journey as a Chartered Accountant began with a passion for numbers 
                  and a commitment to helping businesses achieve financial clarity and compliance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my career, I have witnessed the evolution of Indian taxation laws, from the 
                  implementation of GST to the digitization of tax processes. This experience has equipped 
                  me with deep insights into the practical challenges businesses face and the most effective 
                  solutions to address them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My philosophy is simple: provide honest, transparent, and comprehensive financial guidance 
                  that empowers my clients to make informed decisions. I believe in building long-term 
                  relationships based on trust, reliability, and exceptional service quality.
                </p>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                            <Badge variant="outline" className="text-sm w-fit">{exp.period}</Badge>
                          </div>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Qualifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Qualifications & Certifications</h3>
                  <div className="space-y-3">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{qual}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">By the Numbers</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary-lighter rounded-lg">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-primary-lighter rounded-lg">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                    </div>
                    <div className="text-center p-4 bg-primary-lighter rounded-lg">
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and decision in my practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mx-auto w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;