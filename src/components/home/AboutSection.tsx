
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">About Cotyledon</h2>
          <p className="section-description">
            Founded in 2017, Cotyledon Technologies is a leading IT consulting and 
            software development company based in Chennai, India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cotyledon Office Environment" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-4">Company Overview</h3>
              <p className="text-gray-600">
                Cotyledon Technologies Private Limited harnesses the power of Cognitive Computing, 
                Cloud, Analytics, Salesforce and Emerging technologies to help our clients 
                adapt to the digital world and make them successful.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm text-center">
                <h4 className="font-bold mb-2">Who We Are</h4>
                <p className="text-sm text-gray-600">
                  "Team of Enthusiastic Developers & Professional Architects"
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm text-center">
                <h4 className="font-bold mb-2">Why We Do This</h4>
                <p className="text-sm text-gray-600">
                  "To make people's life & Business easier"
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg shadow-sm text-center">
                <h4 className="font-bold mb-2">Our Approach</h4>
                <p className="text-sm text-gray-600">
                  "Do it Right the First Time"
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-xl mb-2">Vision</h4>
                <p className="text-gray-600 text-sm">
                  "To take people's business to the right customers and rightly at the very first time."
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-2">Mission</h4>
                <p className="text-gray-600 text-sm">
                  "Connecting Business and touching every person's lives, thereby enhancing the people's Business and Life."
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-2">Aspiration</h4>
                <p className="text-gray-600 text-sm">
                  "Do it Right the First Time and make it work as First time ever."
                </p>
              </div>
            </div>
            
            <Button className="mt-4">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
