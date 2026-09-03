import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Papers from '@/components/Papers';
import Initiatives from '@/components/Initiatives';
import SolarWorkshop from '@/components/SolarWorkshop';
import TargetGroups from '@/components/TargetGroups';
import Outputs from '@/components/Outputs';
import Sponsors from '@/components/Sponsors';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Papers />
        <Initiatives />
        <SolarWorkshop />
        <TargetGroups />
        <Outputs />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
