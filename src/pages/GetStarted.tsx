import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Utensils, Truck, Sprout, CreditCard, Monitor, 
  MapPin, CheckCircle2, ArrowRight, ArrowLeft 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    { id: "restaurant", title: "Royal Treat Restaurant", icon: Utensils, needsMap: true },
    { id: "agro", title: "Agro-Allied Farming", icon: Sprout, needsMap: false },
    { id: "logistics", title: "Trading & Logistics", icon: Truck, needsMap: false },
    { id: "bnpl", title: "Buy Now Pay Later", icon: CreditCard, needsMap: false },
    { id: "digital", title: "Digital Services", icon: Monitor, needsMap: false },
];

export default function GetStarted() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: ""
    });

    const handleServiceSelect = (id: string) => {
        setSelectedService(id);
        setStep(2);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setStep(3);
        }, 1000);
    };

    const isRestaurant = selectedService === "restaurant";

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Get Started wth Jsix Group</h1>
                <p className="text-muted-foreground">Let us know how we can serve you today.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
                <div className="flex items-center gap-4">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                                step >= s ? "bg-[#ff5e00] text-white" : "bg-secondary text-muted-foreground"
                            }`}>
                                {s}
                            </div>
                            {s !== 3 && <div className={`w-12 h-1 bg-secondary mx-2 ${step > s ? "bg-[#ff5e00]" : ""}`} />}
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => handleServiceSelect(service.id)}
                                className="group p-6 rounded-2xl border bg-card hover:border-[#ff5e00] hover:shadow-lg hover:shadow-[#ff5e00]/10 transition-all text-left flex flex-col items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 text-[#ff5e00] flex items-center justify-center group-hover:bg-[#ff5e00] group-hover:text-white transition-colors">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">Click to proceed with this service request</p>
                            </button>
                        ))}
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="max-w-xl mx-auto"
                    >
                        <Button variant="ghost" onClick={() => setStep(1)} className="mb-6 pl-0 hover:text-[#ff5e00]">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                        </Button>

                        <div className="bg-card border rounded-2xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Complete your Request</h2>
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="w-full h-10 px-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" 
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input 
                                        required 
                                        type="email" 
                                        className="w-full h-10 px-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <input 
                                        required 
                                        type="tel" 
                                        className="w-full h-10 px-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" 
                                        placeholder="+234..."
                                        value={formData.phone}
                                        onChange={e => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Specific Request / Details</label>
                                    <textarea 
                                        className="w-full min-h-[100px] p-3 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00]" 
                                        placeholder="Tell us what you need..."
                                        value={formData.details}
                                        onChange={e => setFormData({...formData, details: e.target.value})}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-[#ff5e00] hover:bg-[#ff5e00]/90 text-white h-12 text-lg">
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div 
                        key="step3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="bg-card border rounded-2xl overflow-hidden shadow-lg">
                            <div className="bg-green-50 p-6 flex items-center justify-center flex-col text-center border-b">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-green-800">Request Received!</h2>
                                <p className="text-green-600">We have received your details and will get back to you shortly.</p>
                            </div>

                            <div className="p-8">
                                {isRestaurant ? (
                                    <div className="space-y-6">
                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-bold mb-2">Visit Royal Treat Restaurant</h3>
                                            <p className="text-muted-foreground">Come taste the difference at our flagship location.</p>
                                        </div>
                                        <div className="aspect-video w-full bg-secondary rounded-xl overflow-hidden relative">
                                            {/* Placeholder for map - in production use Google Maps Embed */}
                                            <iframe 
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.382023537021!2d3.9167!3d6.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10390d6c0c0c0c0c%3A0x0!2sIjebu%20Ode!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                                                width="100%" 
                                                height="100%" 
                                                loading="lazy" 
                                                className="border-0 grayscale hover:grayscale-0 transition-all duration-500"
                                            ></iframe>
                                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm">
                                                <div className="flex items-center gap-2 text-sm font-bold">
                                                    <MapPin className="w-4 h-4 text-[#ff5e00]" />
                                                    107/111 Folagbade Street, Ijebu-Ode
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-6">
                                        <h3 className="text-xl font-bold">What happens next?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                            <div className="p-4 bg-secondary/30 rounded-xl">
                                                <h4 className="font-bold mb-1">1. Review</h4>
                                                <p className="text-sm text-muted-foreground">Our team will review your request details.</p>
                                            </div>
                                            <div className="p-4 bg-secondary/30 rounded-xl">
                                                <h4 className="font-bold mb-1">2. Contact</h4>
                                                <p className="text-sm text-muted-foreground">We will call you on {formData.phone} within 24 hours.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 bg-[#ff5e00]/5 rounded-xl border border-[#ff5e00]/10">
                                            <p className="font-medium mb-2">Need urgent assistance?</p>
                                            <a href="tel:+2348000000000" className="text-2xl font-bold text-[#ff5e00] hover:underline">
                                                +234 800 000 0000
                                            </a>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="mt-8 flex justify-center">
                                    <Button variant="outline" onClick={() => window.location.href = '/'} className="mr-4">
                                        Return Home
                                    </Button>
                                    {!isRestaurant && (
                                        <Button onClick={() => window.location.href = '/contact'}>
                                            Contact Support
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
