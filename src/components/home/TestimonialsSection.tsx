import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Cotyledon Technologies delivered our mobile app ahead of schedule with all the features we requested. Their team was professional and responsive throughout the project.",
    author: "John Doe",
    position: "CEO, TechStart Inc",
    company: "TechStart Inc",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    quote: "We've been working with Cotyledon for our Salesforce implementation, and they've been extremely knowledgeable and helpful. They understand our business needs and provided customized solutions.",
    author: "Sarah Johnson",
    position: "CTO, CloudSolutions",
    company: "CloudSolutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    quote: "Their data analytics team helped us make sense of our customer data, which has significantly improved our marketing strategies and customer retention. Highly recommended!",
    author: "Michael Chen",
    position: "Marketing Director, RetailGiant",
    company: "RetailGiant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
            Discover why our clients love working with us through their experiences.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-6 sm:-left-12 z-20 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-6 sm:-right-12 z-20 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          {/* Testimonials */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="border-none shadow-2xl rounded-2xl bg-white overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                    <CardContent className="p-8 sm:p-12">
                      <div className="flex flex-col items-center text-center">
                        <svg
                          className="w-16 h-16 text-blue-200 mb-8 animate-pulse"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                          />
                          <div className="text-left">
                            <p className="font-semibold text-lg text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;