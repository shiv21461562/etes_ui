import Hero from "../components/home/Hero";
import About from "../components/home/About";
import EventStats from "../components/home/EventStats";
import Gallery from "../components/home/Gallery";
import Partners from "../components/home/Partners";
import SupportedBy from "../components/home/SupportedBy";
import ExhibitionPage from "../components/home/ExhibitionPage";
import Services from "../components/home/Services";
import MediaPartners from "../components/home/MediaPartners";
import WhyAttend from "../components/home/WhyAttend";
import SponsorsSection from "../components/home/SponsorsSection";
import ThinkInkLink from "../components/home/ThinkInkLink";
import ThemeSection from "../components/home/ThemeSection";
export default function Home() {
  return (
    <>
      <Hero />
       <Services/>
       <WhyAttend />
         
      <About />
      <ThinkInkLink/>
      <ThemeSection/>
        
       <EventStats />
      <MediaPartners/>
      <SponsorsSection/>
     
   
      <Gallery />
      <Partners />
      <SupportedBy />
      <ExhibitionPage/>
    </>
  );
}