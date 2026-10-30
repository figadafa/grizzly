import "./styles/global.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/intro/intro.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Intro>
          <Hero />
        </Intro>

        <About />

        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;