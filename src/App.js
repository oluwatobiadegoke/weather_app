import { useState } from 'react';

import Main from "./components/Main";
import Search from "./components/Search";
import Forecasts from "./components/Forecasts";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

const App = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <main className="w-full h-screen flex font-body">

      <section className="relative">
        <Search toggleSearch={toggleSearch} searchOpen={searchOpen}/>
        <Main toggleSearch={toggleSearch} />
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
