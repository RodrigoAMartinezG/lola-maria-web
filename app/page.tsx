import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Specials from '@/components/Specials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Specials />
      <Menu />
      <Contact />
    </div>
  );
}
