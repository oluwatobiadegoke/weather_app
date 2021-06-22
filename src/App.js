import React, {useContext} from 'react';
import AppContext from './context/appContext';

import Main from "./components/Main";
import Search from "./components/Search";
import Forecasts from "./components/Forecasts";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Loader from "./components/Loader";



const App = () => {

  const { loading } = useContext(AppContext);

  return (
    <main className="w-full h-screen flex flex-col font-body">

      {
        loading ? <Loader /> : (
          <>
            <section className="static lg:relative">
              <Search/>
              <Main />
            </section>

            <section className="flex-1 bg-main-500 flex flex-col justify-between px-0 lg:px-14 xl:px-24 2xl:px-36 ml-0 lg:ml-96">
              <Forecasts />
              <Highlights />
              <Footer />
            </section>
          </>
        )
      }

    </main>
  );
}

export default App;
