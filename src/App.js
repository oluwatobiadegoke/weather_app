import Main from "./components/Main";
import Search from "./components/Search";
import Forecasts from "./components/Forecasts";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

const App = () => {

  return (
    <main className="relative w-full h-screen flex font-body">

      <section className="fixed top-0 left-0 bottom-0 w-96 bg-cards-500">
        <Search />
        <Main />
      </section>

      <section className="flex-1 bg-main-500 flex flex-col justify-between px-36 ml-96">
        <Forecasts />
        <Highlights />
        <Footer />
      </section>

    </main>
  );
}

export default App;
