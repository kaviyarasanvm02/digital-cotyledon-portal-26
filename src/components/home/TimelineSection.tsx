
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2017",
    title: "Company Founded",
    description: "Cotyledon Technologies Private Limited was established in Chennai."
  },
  {
    year: "2018",
    title: "PRODUCT UPGRADE",
    description: "Second Version of CRICBOUNZ was released in 2018."
  },
  {
    year: "2019",
    title: "NEXTGEN PRODUCT",
    description: "Launched VOD application- OTT Platform."
  },
  {
    year: "2020",
    title: "PANDEMIC PROJECT",
    description: "DocsCareU - Appointment Booking system was developed."
  },
  {
    year: "2021",
    title: "CURRENT RELEASE",
    description: "PickYourSlot is Production Ready."
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">Journey of Cotyledon</h2>
          <p className="section-description">
            From our foundation to our current achievements, explore the key milestones 
            that have shaped our company's growth.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary-200 z-0"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 relative z-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-center animate-slide-up`}
              >
                {/* Year marker */}
                <div className="flex-1 sm:flex sm:justify-center">
                  <div className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg inline-block">
                    <span className="font-bold text-xl">{event.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Circle on timeline */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-100 border-4 border-primary-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
