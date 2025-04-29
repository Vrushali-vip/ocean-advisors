import { Gavel, FileText, ShieldCheck, Search, Flag, Gift } from "lucide-react";

const services = [
  {
    icon: <Gavel className="w-8 h-8 text-[#203864]" />,
    title: "Maritime Legal Advisory",
    description: "Expert legal guidance on maritime laws, compliance, and regulatory requirements.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#203864]" />,
    title: "Court & Arbitration",
    description: "Professional representation in maritime disputes, court cases, and arbitration proceedings.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#203864]" />,
    title: "Maritime Insurances",
    description: "Thorough investigations of marine incidents for accurate reporting and accountability.",
  },
  {
    icon: <Search className="w-8 h-8 text-[#203864]" />,
    title: "Marine Incident Investigation",
    description: "Specialized insurance solutions to safeguard maritime assets and operations against potential risks.",
  },
  {
    icon: <Flag className="w-8 h-8 text-[#203864]" />,
    title: "Ship Classification & Flag Registration Services",
    description: "Support with ship classification and international flag registration compliance.",
  },
  {
    icon: <Gift className="w-8 h-8 text-[#203864]" />,
    title: "Vessel Conversion/ Construction",
    description: "Customized vessel conversion and construction to meet maritime standards.",
  },
];

export default function OurServices() {
  return (
    <div className="bg-[#F5F7FA]">
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#203864]">
        <span className="text-[#203864]">
          Ocean Advisors
        </span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="p-6 text-left border-l-4 border-[#203864] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
            <p className="text-sm text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
