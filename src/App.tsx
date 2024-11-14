import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CardSection } from "./components/CardSection";
import { VideoSection } from "./components/VideoSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <div className="px-4 max-w-6xl mx-auto">
        <CardSection />
      </div>
      <VideoSection videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

      <p className="font-headings flex justify-center my-20 text-4xl">
        TODA LA TEORIA DEL UNIVERSO
      </p>

      <p className="font-headings-2 flex justify-center my-20 text-4xl">
        TODA LA TEORIA DEL UNIVERSO
      </p>

      <p className="font-headings-3 flex justify-center my-20 text-4xl">
        TODA LA TEORIA DEL UNIVERSO
      </p>
    </>
  );
}

export default App;
