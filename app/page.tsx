import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Doctors from '@/components/Doctors';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import FloatingActions from '@/components/FloatingActions';
import Header from '@/components/Header';

export const metadata = {
  title: 'Best Surrogacy Clinic in Delhi | Top Surrogacy Center & Treatment',
  description: 'Experience the best surrogacy treatment in Delhi at our top-rated surrogacy center. Trusted by global parents for ethical programs, expert doctors, and legal support in Delhi NCR.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Process />
      <Testimonials />
      <Doctors />
      <FAQ />
      <ContactForm />
      <FloatingActions />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 md:px-12 lg:px-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">Ginix Fertility</h3>
            <p className="text-slate-400 max-w-sm text-sm md:text-base">
              The **Best Surrogacy Hospital in Delhi**, providing ethical and compassionate **Surrogacy Treatment in Delhi** for families worldwide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
          <p className="text-slate-500 text-[10px] md:text-sm text-center md:text-left">© 2024 SurrogacyCare Program. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
