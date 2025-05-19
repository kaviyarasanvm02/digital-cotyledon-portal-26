import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About Cotyledon
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Founded in 2017, Cotyledon Technologies is a premier IT consulting and software development company based in Chennai, India, dedicated to driving digital transformation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cotyledon Office Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Company Overview */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Company Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Cotyledon Technologies Private Limited leverages Cognitive Computing, Cloud, Analytics, Salesforce, and Emerging Technologies to empower our clients to thrive in the digital era.
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Who We Are</h4>
                <p className="text-sm text-gray-600">
                  A team of passionate developers and expert architects.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Why We Do This</h4>
                <p className="text-sm text-gray-600">
                  To simplify lives and enhance businesses.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Our Approach</h4>
                <p className="text-sm text-gray-600">
                  Excellence from the first step.
                </p>
              </div>
            </div>

            {/* Vision, Mission, Aspiration */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Vision</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To connect businesses with the right customers, perfectly, from the very start.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To transform businesses and enrich lives through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Aspiration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To deliver flawless solutions that work seamlessly from day one.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;