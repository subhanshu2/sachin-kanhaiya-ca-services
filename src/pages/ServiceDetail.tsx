import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { ProvidedServices } from "@/constants/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { serviceKey } = useParams();
  const service = ProvidedServices.find(s => s.link === `/services/${serviceKey}`);

  if (!service) {
    return <div className="p-8 text-center text-xl">Service not found.</div>;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background font-inter">
        <Navbar />
    <div className="max-w-2xl mx-auto py-16 px-4">
        
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${service.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
          </div>
          <CardDescription className="mt-2">{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;