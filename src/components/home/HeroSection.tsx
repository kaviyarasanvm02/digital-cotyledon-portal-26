import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Transforming Businesses Through
            <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
            Cotyledon Technologies delivers innovative IT solutions in Salesforce, 
            Mobile & Web Development, Cloud Services, and Data Analytics to help 
            businesses thrive in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button size="lg" className="font-medium shadow-md">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="font-medium border-gray-300">
              Contact Us
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">
            {[
              { label: "Years Experience", value: "8+" },
              { label: "Team Members", value: "50+" },
              { label: "Products", value: "10+" },
            ].map((item, i) => (
              <div key={i} className="text-center border rounded-xl p-4 shadow-sm bg-white">
                <p className="text-3xl font-bold text-primary">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
