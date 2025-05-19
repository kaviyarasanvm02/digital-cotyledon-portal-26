import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2017",
    title: "Company Founded",
    description: "Cotyledon Technologies Private Limited was established in Chennai."
  },
  {
    year: "2018",
    title: "Product Upgrade",
    description: "Second Version of CRICBOUNZ was released in 2018."
  },
  {
    year: "2019",
    title: "NextGen Product",
    description: "Launched VOD application- OTT Platform."
  },
  {
    year: "2020",
    title: "Pandemic Project",
    description: "DocsCareU - Appointment Booking system was developed."
  },
  {
    year: "2021",
    title: "Current Release",
    description: "PickYourSlot is Production Ready."
  }
];

const TimelineSection = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeSpeed = 100; // Time in seconds for one full loop

  // Duplicate events for seamless marquee looping
  const extendedEvents = [...timelineEvents, ...timelineEvents];

  // Auto-scroll marquee effect
  useEffect(() => {
    const totalHeight = containerRef.current.scrollHeight / 2; // Half because of duplication
    controls.start({
      y: -totalHeight,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: marqueeSpeed,
          ease: "linear"
        }
      }
    });

    return () => controls.stop();
  }, [controls]);

  // Handle carousel navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineEvents.length);
    controls.start({
      y: `-${(currentIndex + 1) * 20}vh`,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
    controls.start({
      y: `-${(currentIndex - 1 + timelineEvents.length) % timelineEvents.length * 20}vh`,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-100">
            Explore the milestones that define Cotyledon Technologies' growth and innovation.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[60vh] overflow-hidden">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1.5 bg-blue-200 rounded-full z-0"></div>

          {/* Timeline events */}
          <motion.div
            ref={containerRef}
            animate={controls}
            className="space-y-16 relative z-10"
          >
            {extendedEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-center`}
              >
                {/* Year marker */}
                <div className="flex-1 sm:flex sm:justify-center">
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg inline-block transform hover:scale-105 transition-transform duration-300">
                    <span className="font-bold text-xl tracking-wide">{event.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="border-none shadow-xl rounded-2xl bg-white overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-semibold text-gray-900">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Circle on timeline */}
                <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-100 border-4 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;