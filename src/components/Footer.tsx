import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Income Tax", href: "/services/income-tax" },
    { name: "GST Services", href: "/services/gst" },
    { name: "Company Incorporation", href: "/services/incorporation" },
    { name: "Audit Services", href: "/services/audit" },
    { name: "Corporate Finance", href: "/services/corporate-finance" },
    { name: "NRI Services", href: "/services/nri-services" }
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">CA</span>
                <span className="text-2xl font-light">Sachin Kanhaiya</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Professional Chartered Accountant providing expert financial solutions 
                for businesses and individuals across India.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">info@casachin.com</p>
                  <p className="text-white/80">sachin@casachin.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                <p className="text-white/80">
                  Business District, <br />
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} CA Sachin Kanhaiya. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Professional Chartered Accountant Services | ICAI Member
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;