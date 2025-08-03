import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@casachin.com", "sachin@casachin.com"],
      description: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Business District", "Mumbai, Maharashtra, India"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By appointment"],
      description: "Extended hours during tax season"
    }
  ];

  const serviceAreas = [
    "Income Tax Planning & Filing",
    "GST Registration & Compliance",
    "Company Incorporation",
    "Audit & Assurance Services",
    "Corporate Finance Advisory",
    "NRI Tax Services",
    "Payroll & TDS Management",
    "Accounting Supervision"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Ready to streamline your finances? Let's discuss how I can help 
            your business achieve compliance and growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send Me a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name (optional)" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required *</Label>
                    <select 
                      id="service" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      {serviceAreas.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                      <option value="other">Other (please specify in message)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your requirements and any specific questions you have..."
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent 
                    to being contacted regarding your inquiry.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-lighter rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                          </div>
                        </div>
                        <div className="ml-13 space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground/80">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="flex items-center space-x-3 p-3 bg-primary-lighter rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 flex-1"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center space-x-3 p-3 bg-success/10 text-success rounded-lg hover:bg-success hover:text-white transition-colors duration-300 flex-1"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="bg-primary-lighter">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">Quick Response Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      I personally respond to all inquiries within 24 hours. 
                      For urgent matters, please call directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;