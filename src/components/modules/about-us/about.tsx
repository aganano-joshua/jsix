import { motion } from "framer-motion";
import { Utensils, Truck, Sprout, CreditCard, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Royal Treat Restaurant",
        description: "A premium eatery offering a delightful fusion of local and intercontinental dishes. Taste the difference in every bite.",
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-2",
        delay: 0.2
    },
    {
        title: "Agro-Allied Farming",
        description: "Your trusted source for fresh farm produce, specializing in healthy chickens and crate eggs for wholesale and retail.",
        icon: Sprout,
        image: "https://images.unsplash.com/photo-1612170153139-6f881d97f1f8?q=80&w=2072&auto=format&fit=crop",
        colSpan: "md:col-span-1",
        delay: 0.3
    },
    {
        title: "Trading & Logistics",
        description: "Official distributors for top brands like Chivita and Dufil. We bridge the gap between manufacturers and consumers.",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-1",
        delay: 0.4
    },
    {
        title: "Buy Now Pay Later",
        description: "Empowering you with flexible payment options for electronics, phones, and essential household items.",
        icon: CreditCard,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-1",
        delay: 0.5
    },
    {
        title: "Digital Services",
        description: "Modern Cyber Cafe providing high-speed internet, printing, and essential digital business support services.",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-1",
        delay: 0.6
    }
];

const About = () => {
    return (
        <section className="py-20 bg-secondary/20 relative overflow-hidden" id="about">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ff5e00]/5 rounded-bl-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#ff5e00]/5 rounded-tr-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-[#ff5e00] bg-[#ff5e00]/10 px-4 py-1.5 rounded-full"
                    >
                        Our Versatility
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight"
                    >
                        Diversified Services, <br /> One <span className="text-[#ff5e00]">Jsix Group.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        We are a multi-faceted conglomerate dedicated to delivering excellence across agriculture, food services, logistics, and digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${service.colSpan} group relative overflow-hidden rounded-3xl bg-background border hover:border-[#ff5e00]/50 transition-colors duration-500 shadow-sm hover:shadow-[#ff5e00]/10`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                        >
                            {/* Image & Gradient Background - Hidden on Hover to reveal solid color */}
                            <div className="absolute inset-0 z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[300px] text-white group-hover:text-foreground transition-colors duration-300">
                                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center group-hover:bg-[#ff5e00]/10 group-hover:text-[#ff5e00] transition-colors duration-500 mb-4 backdrop-blur-sm group-hover:backdrop-blur-none">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{service.title}</h3>
                                    <p className="text-white/80 group-hover:text-muted-foreground font-medium leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <Button variant="link" className="p-0 h-auto text-[#ff5e00] flex items-center gap-2">
                                            Learn more <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About