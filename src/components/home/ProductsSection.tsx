import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import pys from "@/Assets/pys.jpg";
import dc from "@/Assets/DC.png";
import cricket from "@/Assets/cricket.png";
import vod from "@/Assets/vod.png";

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
    image: pys
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
    image: vod
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
    image: dc
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
    image: cricket
  }
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("pickyourslot");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="products" className="py-28 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Our Products
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Discover our innovative products designed to solve real-world problems and enhance business operations.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <Tabs
          defaultValue="pickyourslot"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <motion.div
            className="flex justify-center mb-12"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent p-0">
              {products.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-indigo-50 data-[state=inactive]:hover:text-indigo-700 shadow-md"
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card className="border-none rounded-3xl shadow-2xl overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Image Section */}
                      <motion.div
                        className="h-80 md:h-[400px] relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>

                      {/* Content Section */}
                      <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-indigo-50">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{product.name}</h3>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>

                        <h4 className="font-semibold text-xl text-indigo-600 mb-4">Key Features:</h4>
                        <ul className="space-y-4">
                          {product.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                              <svg className="w-6 h-6 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700 text-base">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;