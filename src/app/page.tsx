import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <main className="container">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        <Contact />
      </main>
    </>
  );
}
