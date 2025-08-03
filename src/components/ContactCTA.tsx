import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-hero-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how I can help streamline your finances and ensure compliance. 
              Get expert advice tailored to your specific needs.
            </p>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4 text-white/90">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+91 99114 31830</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@casachin.com</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
            <div className="text-center">
              <div className="font-semibold">Quick Response</div>
              <div className="text-sm">Within 24 hours</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Expert Advice</div>
              <div className="text-sm">15+ years experience</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">Confidential</div>
              <div className="text-sm">100% secure consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;