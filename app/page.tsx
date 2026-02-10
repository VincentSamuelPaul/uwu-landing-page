import MainHook from "./MainHook";
import SecondHook from "./SecondHook";
import ThirdHook from "./ThirdHook";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
        <MainHook/>
        <SecondHook/>
        <ThirdHook/>
        <Footer/>
    </div>
  );
}
