import MainHook from "./MainHook";
import SecondHook from "./SecondHook";
import ThirdHook from "./ThirdHook";
import Footer from "./components/Footer";
import ShootingStars from "./components/ShootingStars/ShootingStars";

export default function Home() {
  return (
    <div className="relative bg-black overflow-hidden">
      
      {/* Background Animation */}
      <ShootingStars count={14} />

      {/* Content */}
      <main className="relative z-10">
        <MainHook />
        <SecondHook />
        <ThirdHook />
        <Footer />
      </main>

    </div>
  );
}
