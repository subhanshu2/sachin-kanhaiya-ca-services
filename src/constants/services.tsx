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

export const ProvidedServices = [
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