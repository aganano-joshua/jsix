import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Tractor, Truck, UtensilsCrossed } from "lucide-react";
import { motion, easeOut, AnimatePresence } from "framer-motion";

const backgroundImages = [
    "https://www.jsixgroup.com/assets/images/office.jpg",
    "https://www.jsixgroup.com/assets/images/sliders/4.png",
    "https://www.jsixgroup.com/assets/images/services/111.png",
    "https://www.jsixgroup.com/assets/images/hen.jpg"
];

function BackgroundSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff5e00]/40 via-background/60 to-background z-10" />
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={backgroundImages[index]}
                        className="w-full h-full object-cover"
                        alt="Background ambiance"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function Petal({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            viewBox="0 0 16 48"
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M 0 8 A 8 8 0 0 1 16 8 L 11 40 A 3 3 0 0 1 5 40 L 0 8 Z"
                fill="currentColor"
            />
        </svg>
    )
}

function Crown() {
    return (
        <div className="absolute -top-8 -right-6 flex items-end rotate-34">
            <Petal className="w-4 h-8 text-[#ff5e0057] origin-bottom -rotate-26" />
            <Petal className="w-4 h-10 text-[#ff5e00] -ml-2" />
            <Petal className="w-4 h-8 text-[#ff5e0057] -ml-2 origin-bottom rotate-26" />
        </div>
    )
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
};

export default function Hero() {
    return (
        <div className="relative w-full overflow-x-hidden pt-8">
            <BackgroundSlider />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* First Column (2/3 width) */}
                    <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
                        <motion.div variants={itemVariants}>
                            <span className="text-sm font-bold bg-[#ff5e001a] px-4 py-2 text-[#ff5e00] rounded-full inline-block">Based in Nigeria</span>
                        </motion.div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                                variants={itemVariants}
                            >
                                Jsix group
                            </motion.h1>

                            <motion.div className="relative group cursor-pointer" whileHover={{ scale: 1.05 }}>
                                <Crown />
                                <div className="flex flex-row gap-4 bg-black text-white justify-center items-center py-3 px-6 rounded-2xl shadow-xl">
                                    <UtensilsCrossed className="text-[#ff5e00] w-6 h-6" />
                                    <Tractor className="text-[#ff5e00] w-6 h-6" />
                                    <Truck className="text-[#ff5e00] w-6 h-6" />
                                    <Monitor className="text-[#ff5e00] w-6 h-6" />
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                            variants={itemVariants}
                        >
                            Best company to partner with
                        </motion.p>

                        <motion.div className="relative w-fit mt-12 group max-w-full" variants={itemVariants}>
                            <img
                                className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] max-w-full h-auto"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajsh9xtg7eQGG9GxDuD1rPxWdKrJF_uZA87OAfyy6Q4B8UFeEmhgo926arb1fQYqftMR7tT4oYCvjlfV-5GV67RA&s&ec=121528435"
                                alt="Delicious Food"
                            />
                            <motion.p
                                className="absolute bottom-4 left-4 right-auto md:top-1/2 md:right-0 md:left-auto md:bottom-auto md:translate-x-1/3 md:-translate-y-1/2 bg-blue-100/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 font-bold shadow-xl whitespace-normal md:whitespace-nowrap text-sm border border-white/50 max-w-[90%] md:max-w-none"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                Delicious food that meets your taste 😋
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="relative mt-4 mr-0 lg:-ml-32 lg:mr-4 lg:w-[130%] z-20 w-full"
                            variants={itemVariants}
                        >
                            <div className="bg-white/90 backdrop-blur-md border border-[#ff5e00]/20 p-6 md:p-8 rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl relative overflow-hidden group hover:shadow-[#ff5e00]/20 transition-all duration-500">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#ff5e00]" />
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#ff5e00]/5 rounded-full blur-3xl group-hover:bg-[#ff5e00]/10 transition-colors" />

                                <h3 className="text-xl font-bold text-[#ff5e00] mb-3 flex items-center gap-2">
                                    Why Choose Us?
                                    <span className="text-2xl">🌱</span>
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    We are a leading agricultural company in Nigeria, dedicated to providing <span className="text-[#ff5e00]">high-quality farm produce</span> and exceptional services. With a commitment to sustainability, we meet diverse client needs while promoting responsible farming.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Second Column (1/3 width) */}
                    <motion.div className="lg:col-span-1" variants={itemVariants}>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full max-w-sm lg:max-w-full mt-8 lg:mt-0">
                                {/* Top-left rotated badge */}
                                <motion.p
                                    className="absolute top-0 left-0 md:-translate-x-1/4 -translate-y-1/3 -rotate-12 bg-[#f79a65] text-[#612706] rounded-full px-6 py-2 font-bold shadow-lg whitespace-nowrap z-10 border-2 border-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                >
                                    Fresh Farm Produce
                                </motion.p>

                                <img
                                    className="rounded-[2rem] w-full h-auto object-cover aspect-[3/4] shadow-2xl"
                                    src="https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ="
                                    alt="Farmer ploughing field"
                                />

                                {/* Bottom-right overlapping text */}
                                <motion.div
                                    className="absolute -bottom-6 -right-2 bg-[#f79a65] p-3 rounded-2xl shadow-lg rotate-3 border-2 border-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                                >
                                    <p className="font-handwriting font-bold text-[#612706] text-sm">
                                        Unresistable
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                className="w-full max-w-sm lg:max-w-full mt-12"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a href="/get-started">
                                    <Button className="w-full bg-[#ff5e00] hover:bg-[#ff5e00]/90 text-white rounded-full py-7 text-xl font-bold shadow-xl transition-all cursor-pointer">
                                        Order Now
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}