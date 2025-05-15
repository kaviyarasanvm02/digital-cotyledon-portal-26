
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses Through 
              <span className="gradient-text"> Technology</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Cotyledon Technologies delivers innovative IT solutions in Salesforce, 
              Mobile & Web Development, Cloud Services, and Data Analytics to help 
              businesses thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Contact Us
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">6+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-500">Team Members</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cotyledon Technologies team at work" 
              className="relative z-10 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
