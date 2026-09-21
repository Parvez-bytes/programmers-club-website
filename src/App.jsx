import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#090909]">
      <Navbar />

      <main className="flex h-full flex-col">
        <div className="min-h-0 flex-1">
          <Hero />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;