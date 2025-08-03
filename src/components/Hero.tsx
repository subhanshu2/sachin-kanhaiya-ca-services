import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/ca-sachin-hero.jpg";

const Hero = () => {
  const highlights = [
    { icon: CheckCircle, text: "15+ Years Experience" },
    { icon: Users, text: "500+ Satisfied Clients" },
    { icon: Award, text: "Expert CA Services" },
    { icon: Clock, text: "24/7 Support" },
  ];

  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Expert Financial
                <span className="block text-white/90">Solutions You</span>
                <span className="block">Can Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Professional Chartered Accountant services for individuals and businesses. 
                Let me handle your finances while you focus on growing your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 text-white/90">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="CA Sachin Kanhaiya - Professional Chartered Accountant"
                className="w-full max-w-md mx-auto rounded-2xl shadow-large"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-8 md:h-12 text-background">
          <path fill="currentColor" d="M0,0 C240,120 480,120 720,60 C960,0 1200,60 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;