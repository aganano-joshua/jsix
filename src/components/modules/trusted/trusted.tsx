import { motion } from 'framer-motion'

const companies = [
    { name: "GIG Logistics", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" }, // Using placeholders
    { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Nestl%C3%A9_text_logo.svg/2560px-Nestl%C3%A9_text_logo.svg.png" },
    { name: "Shoprite", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Dangote", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Jumia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "MTN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
]

const Trusted = () => {
  return (
    <section className="py-12 w-full overflow-hidden bg-background/50 backdrop-blur-sm border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Text Section */}
            <div className="w-full md:w-1/3 flex-shrink-0 text-center md:text-left z-20 relative bg-background/80 md:bg-transparent p-2 rounded-xl">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Trusted by <span className="text-[#ff5e00]">80+</span> companies
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">
                    Powering businesses across the continent
                </p>
            </div>

            {/* Scrolling Logos Section */}
            <div className="relative w-full md:w-2/3 flex items-center overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div 
                    className="flex shrink-0 items-center gap-16 min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 60 
                    }}
                >
                    {/* Double the array for seamless loop */}
                    {[...companies, ...companies, ...companies, ...companies, ...companies, ...companies].map((company, i) => (
                        <div key={i} className="relative h-12 w-32 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                             {/* Keep the img simple - simplified logic since URLs are examples */}
                             <img 
                                src={company.logo} 
                                alt={company.name} 
                                className="h-8 md:h-10 w-auto object-contain max-w-full"
                             />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Trusted