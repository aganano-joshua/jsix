import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const businesses = [
        { name: "Royal Treat Restaurant", href: "#" },
        { name: "Agro-Allied Farming", href: "#" },
        { name: "Trading & Logistics", href: "#" },
        { name: "Buy Now Pay Later", href: "#" },
        { name: "Digital Services", href: "#" }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Vision", href: "/#vision" },
        { name: "Our Mission", href: "/#mission" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">Jsix Group</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            A diversified conglomerate committed to excellence in agriculture, hospitality, logistics, and digital solutions. Empowering communities through innovation.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a 
                                    key={i} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5e00] hover:text-white transition-all duration-300 text-gray-400"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Our Businesses */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-[#ff5e00] rounded-full"></span>
                            Our Businesses
                        </h3>
                        <ul className="space-y-4">
                            {businesses.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-400 hover:text-[#ff5e00] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ff5e00] transition-colors"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-[#ff5e00] rounded-full"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-400 hover:text-[#ff5e00] transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#ff5e00]" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-[#ff5e00] rounded-full"></span>
                            Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#ff5e00] shrink-0 mt-1" />
                                <span>107/111, Folagbade Street,<br />Ijebu-Ode, Ogun State,<br />Nigeria.</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-[#ff5e00] shrink-0" />
                                <a href="tel:+2348000000000">+234 800 000 0000</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-[#ff5e00] shrink-0" />
                                <a href="mailto:info@jsixgroup.com">info@jsixgroup.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} Jsix Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#ff5e00] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#ff5e00] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
