import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in delay-100">
            We're here to help your business thrive with our cutting-edge IT solutions. Reach out today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we assist you?" 
                  required 
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-[160px] border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Details</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with us through your preferred method. We're always ready to assist!
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 group-hover:text-blue-800 transition-colors" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No:11/198, Mambakkam Main Road, <br />
                      Medavakkam, Chennai - 600 100.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 group-hover:text-blue-800 transition-colors" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600 text-sm">
                      <a 
                        href="tel:+917200008383" 
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 7200008383
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 group-hover:text-blue-800 transition-colors" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm">
                      <a 
                        href="mailto:info@cotyledon.in" 
                        className="hover:text-blue-600 transition-colors"
                      >
                        info@cotyledon.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.727995349198!2d80.18728847658777!3d12.916487983605426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266daffe0fbc9%3A0x6618635426172c7a!2sCotyledon%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sus!4v1747305127140!5m2!1sen!2sus" 
           width="600"
            height="450">
           </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;