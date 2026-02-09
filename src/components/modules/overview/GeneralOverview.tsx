import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Map, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
    {
        id: "vision",
        label: "Our Vision",
        content: "To be a leading conglomerate delivering sustainable value and satisfying customer needs through innovation and excellence.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Globe/Space
        icon: Globe
    },
    {
        id: "mission",
        label: "Our Mission",
        content: "To satisfy customers in our state of art business facilities, rising the bar in the business community while maintaining global best practices.",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop", // Map/plan
        icon: Map
    }
];

export default function GeneralOverview() {
    const [activeTab, setActiveTab] = useState("vision");

    // Auto-loop tabs
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab(prev => {
                const currentIndex = tabs.findIndex(t => t.id === prev);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].id;
            });
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(timer);
    }, [activeTab]); // Reset timer on interaction

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        We pride ourselves in providing <span className="text-[#ff5e00]">quality</span> and <br/> <span className="text-[#ff5e00]">great service</span> through our subsidiaries
                    </motion.h2>
                </div>

                {/* Vision & Mission Slider/Tabs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div className="order-2 lg:order-1">
                        <div className="flex gap-4 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                        activeTab === tab.id 
                                        ? "bg-[#ff5e00] text-white shadow-lg shadow-[#ff5e00]/25" 
                                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold">{tabs.find(t => t.id === activeTab)?.label}</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    "{tabs.find(t => t.id === activeTab)?.content}"
                                </p>
                                <div className="flex items-center gap-2 text-[#ff5e00] font-medium">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span>Excellence in Service</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                src={tabs.find(t => t.id === activeTab)?.image}
                                alt={activeTab}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                </div>

                {/* Corporate Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div 
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src="https://www.jsixgroup.com/assets/images/about/jsixhome.png" 
                            alt="Jsix Headquarters" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                         {/* Floating Badge */}
                         <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                            <p className="font-bold text-gray-900">Headquarters</p>
                            <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold leading-tight">
                            We are a conglomerate of <span className="text-[#ff5e00]">six subsidiaries</span>
                        </h3>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                J-SIX Group is divided into <span className="font-semibold text-foreground">Agro, Cafe, Trade and Logistics, Bureau De Change, Just Eggs, and Fast Food</span>.
                            </p>
                            <p>
                                The essence of our existence is putting customers first, raising the bar in the business community. We are located in the commercial hub of Nigeria, Lagos state, and we also service customers nationwide.
                            </p>
                        </div>
                        <Button className="rounded-full bg-[#ff5e00] hover:bg-[#ff5e00]/90 text-white px-8 h-12 text-base">
                            Contact Us <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </motion.div>
                </div>

                {/* Our Businesses - Bottom Section */}
                <div className="bg-secondary/30 rounded-[3rem] p-8 md:p-16 text-center">
                    <div className="max-w-3xl mx-auto mb-12">
                        <span className="text-[#ff5e00] font-bold tracking-wider uppercase text-sm mb-2 block">Corporate Structure</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Businesses</h2>
                        <h3 className="text-xl font-medium text-foreground/80 mb-6">
                            We operate with best and global business practices.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our six conglomerate of <span className="text-foreground font-medium">J-Six Chicken, J-Six Farm, J-Six Cafe, J-Six Bureau De Change, Just Eggs and J-Six Trade logistics</span> are poised towards customers satisfaction, quality products, and friendly discount on purchases.
                        </p>
                    </div>

                    {/* Business Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {[
                            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // Food
                            "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop", // Farm
                            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop", // Finance
                            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop", // Logistics
                            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", // Cafe/Work
                            "https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=800&auto=format&fit=crop"  // Eggs/General
                        ].map((src, i) => (
                            <motion.div 
                                key={i}
                                className="aspect-square rounded-2xl overflow-hidden relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Business Unit" />
                                <div className="absolute inset-0 bg-[#ff5e00]/0 group-hover:bg-[#ff5e00]/20 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}