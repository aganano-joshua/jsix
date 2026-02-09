import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/modules/footer/Footer";

export default function Contact() {
    return (
        <div className="pt-20 min-h-screen flex flex-col">
            <div className="bg-[#ff5e00]/5 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We'd love to hear from you. Here's how you can reach us.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00] shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                                    <p className="text-muted-foreground">
                                        107/111, Folagbade Street,<br />
                                        Ijebu-Ode, Ogun State, Nigeria.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00] shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-muted-foreground mb-1">+234 800 000 0000</p>
                                    <p className="text-muted-foreground">+234 812 345 6789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00] shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-muted-foreground">info@jsixgroup.com</p>
                                    <p className="text-muted-foreground">support@jsixgroup.com</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00] shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                                    <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                                    <p className="text-muted-foreground">Saturday: 9am - 4pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border rounded-3xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input type="text" className="w-full h-12 px-4 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input type="text" className="w-full h-12 px-4 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" placeholder="Doe" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <input type="email" className="w-full h-12 px-4 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full min-h-[150px] p-4 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full h-12 text-lg bg-[#ff5e00] hover:bg-[#ff5e00]/90 text-white rounded-xl">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-20 rounded-3xl overflow-hidden border h-[400px] relative bg-secondary">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.382023537021!2d3.9167!3d6.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10390d6c0c0c0c0c%3A0x0!2sIjebu%20Ode!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                        width="100%" 
                        height="100%" 
                        loading="lazy" 
                        className="border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </div>
    )
}
