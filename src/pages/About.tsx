import GeneralOverview from "@/components/modules/overview/GeneralOverview";
import AboutModule from "@/components/modules/about-us/about";
import Footer from "@/components/modules/footer/Footer";

export default function About() {
    return (
        <div className="pt-20"> {/* Added padding top for fixed header */}
            <div className="bg-secondary/30 py-20 mb-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-[#ff5e00]">Jsix Group</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We are a multi-faceted conglomerate dedicated to delivering excellence across agriculture, food services, logistics, and digital solutions.
                    </p>
                </div>
            </div>
            
            <GeneralOverview />
            <AboutModule />
            <Footer />
        </div>
    )
}
