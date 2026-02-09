import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services: { title: string; href: string; description: string }[] = [
    {
        title: "Restaurant",
        href: "/services/restaurant",
        description: "Taste you can't resist just now!",
    },
    {
        title: "Trading & Logistics",
        href: "/services/logistics",
        description: "Reliable trading and logistics for dairy products.",
    },
    {
        title: "Farm & Produce",
        href: "/services/farm",
        description: "Fresh farm chicken and eggs directly to you.",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    to={href ?? "#"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = React.useState(false)

    // Close mobile menu on resize
    React.useEffect(() => {
        const handleResize = () => {
             if (window.innerWidth >= 768) {
                setIsOpen(false)
             }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
            <div className="flex h-16 w-full items-center justify-between px-6 md:px-12">
                <Link to="/" className="flex items-center space-x-2 z-50" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-bold">jsix<span className="text-[#ff5e00]">.</span></span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-foreground data-[active]:text-foreground")}>
                                        About Us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {services.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-foreground data-[active]:text-foreground")}>
                                        Contact Us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:flex items-center">
                    <Button className="rounded-2xl border-[#ff5e00] text-[#ff5e00] hover:bg-[#ff5e00] hover:text-white" variant="outline">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden z-50 p-2 text-foreground/80 hover:text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 right-0 bg-background border-t md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 space-y-6 container mx-auto">
                            <Link 
                                to="/about" 
                                className="text-lg font-medium text-muted-foreground hover:text-[#ff5e00] transition-colors py-2 border-b border-border/50"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>

                            <div className="space-y-4">
                                <button 
                                    className="flex items-center justify-between w-full text-lg font-medium text-muted-foreground hover:text-[#ff5e00] transition-colors py-2 border-b border-border/50"
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    Services
                                    <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                                </button>
                                
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden pl-4 space-y-3"
                                        >
                                            {services.map((input) => (
                                                <Link
                                                    key={input.title}
                                                    to={input.href}
                                                    className="block text-base text-muted-foreground/80 hover:text-[#ff5e00] py-2"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {input.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link 
                                to="/contact" 
                                className="text-lg font-medium text-muted-foreground hover:text-[#ff5e00] transition-colors py-2 border-b border-border/50"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                            
                            <div className="pt-4">
                                <Button className="w-full rounded-xl bg-[#ff5e00] text-white hover:bg-[#ff5e00]/90 py-6 text-lg">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header