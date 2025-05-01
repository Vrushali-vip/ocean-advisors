import Image from "next/image";
import { Button } from "./ui/Button";

type CountryDoc = {
    flag: string; // image URL
    name: string;
    description: string;
    highlight?: boolean;
  };
  
  const countries: CountryDoc[] = [
    {
      flag: "/flags/barbados.svg",
      name: "BARBADOS",
      description: "Endorsements from Barbados",
    },
    {
      flag: "/flags/beliz.jpg",
      name: "BELIZE",
      description: "Endorsements from Belize",
    },
    {
      flag: "/flags/HONDURAS.svg",
      name: "HONDURAS",
      description: "Diplomas from Honduras",
    },
    {
      flag: "/flags/comoros.jpg",
      name: "COMOROS",
      description: "Endorsements from Comoros",
    },
    {
      flag: "/flags/moldova.jpg",
      name: "MOLDOVA",
      description: "Endorsements from Moldova",
      
    },
    {
      flag: "/flags/palau.svg",
      name: "PALAU",
      description: "Endorsements from Palau",
      
    },
    {
      flag: "/flags/panama.svg",
      name: "PANAMA",
      description: "Endorsements from Panama",
      
    },
    
    {
      flag: "/flags/togo.svg",
      name: "TOGO",
      description: "Endorsements from Togo",
    },
    {
      flag: "/flags/grenides.webp",
      name: "SAINT VINCENT & THE GRENADINES",
      description: "Endorsements from Saint Vincent and the Grenadines",
    },
    {
      flag: "/flags/jamaica.svg",
      name: "JAMAICA",
      description: "Endorsements from Jamaica",
    },
    
  ];
  
  export default function DocumentsForSailors() {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#203864]">Documents for Sailors</h2>
  
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`p-4 border ${
                country.highlight ? "border-red-500" : "border-blue-900"
              } hover:shadow-md transition rounded-md flex flex-col items-center text-center`}
            >
              <Image
                src={country.flag}
                alt={country.name}
                height={50}
                width={50}
                className="w-12 h-auto mb-4"
              />
              <h3 className="font-bold text-md text-gray-900">{country.name}</h3>
              <p className="text-sm text-black">{country.description}</p>
            </div>
          ))}
        </div>
  
        <Button className="bg-[#203864] hover:bg-[#B4C7E7] hover:text-[#203864] px-6 py-3 mt-2 text-white font-semibold rounded-sm mt-10">
          SUBMIT AN APPLICATION
        </Button>
      </section>
    );
  }
  