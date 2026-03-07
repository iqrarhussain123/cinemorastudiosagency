import About from '@/components/About';
import CaseStudySection from '@/components/CaseStudySection';
import CustomCursor from '@/components/CustomCursor';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import JournalSection from '@/components/JournalSection';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Services from '@/components/Services';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import StartCreating from '@/components/StartCreating';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import TrueClarity from '@/components/TrueClarity';
import WhyUs from '@/components/WhyUs';

export default function Page() {
    return (
        <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <TrueClarity />
                <WhyUs />
                <Process />
                <CaseStudySection />
                <Testimonials />
                <Team />
                <Pricing />
                <FAQSection />
                <StartCreating />
                <JournalSection />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}
