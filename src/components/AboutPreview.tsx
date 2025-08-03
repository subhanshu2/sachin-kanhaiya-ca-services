import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Clock, Users, CheckCircle } from "lucide-react";

const AboutPreview = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Proven expertise in taxation and finance"
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses and individuals served"
    },
    {
      icon: CheckCircle,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful financial solutions delivered"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ];

  const expertise = [
    "Chartered Accountant (ICAI Membership)",
    "Expert in Income Tax & GST Laws",
    "Corporate Finance & Restructuring",
    "Audit & Risk Management",
    "Company Law & Compliance",
    "International Taxation for NRIs"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet CA Sachin Kanhaiya
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in taxation, audit, and corporate finance, 
                I provide comprehensive financial solutions that help businesses thrive and 
                individuals achieve their financial goals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My commitment to excellence, attention to detail, and deep understanding of 
                Indian financial regulations ensures that your business remains compliant 
                while maximizing growth opportunities.
              </p>
            </div>

            {/* Expertise List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Areas of Expertise:</h3>
              <div className="grid grid-cols-1 gap-2">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="space-y-4 p-0">
                    <div className="mx-auto w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                      <div className="font-semibold text-foreground">{achievement.label}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;