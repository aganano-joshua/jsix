import Hero from "@/components/modules/home/Hero";
import Trusted from "@/components/modules/trusted/trusted";
import About from "@/components/modules/about-us/about";
import GeneralOverview from "@/components/modules/overview/GeneralOverview";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <Hero />
            <div className="">
                <Trusted />
            </div>
            <GeneralOverview />
            <About />
        </div>
    )
}
