
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: "pickyourslot",
    name: "Pick Your Slot",
    description: "Avail Services of Your Choice & Preference",
    features: [
      "Booking management system",
      "Easy service scheduling",
      "Customer preference settings",
      "Real-time availability",
      "Automated notifications"
    ],
    image: "https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vod",
    name: "VOD",
    description: "Launch your OTT Platform instantly with no technical Knowledge",
    features: [
      "Content management system",
      "Subscription management",
      "Analytics dashboard",
      "Multi-device compatibility",
      "Customizable interface"
    ],
    image: "https://images.unsplash.com/photo-1522869635100-187f6605151d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "docscareu",
    name: "DocsCareU",
    description: "Clinic Management Application",
    features: [
      "Patient records management",
      "Appointment scheduling",
      "Billing and invoicing",
      "Prescription management",
      "Medical history tracking"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cricbounz",
    name: "CRICBOUNZ",
    description: "Play & Be a Celebrity",
    features: [
      "Cricket tournament management",
      "Player statistics and profiles",
      "Live scoring system",
      "Team registration",
      "Interactive leaderboards"
    ],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("pickyourslot");

  return (
    <section id="products" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">Our Products</h2>
          <p className="section-description">
            Discover our innovative products designed to solve real-world problems
            and enhance business operations.
          </p>
        </div>
        
        <Tabs 
          defaultValue="pickyourslot" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id}
                  className="text-sm sm:text-base"
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="animate-fade-in">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      
                      <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
