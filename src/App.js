import React, { useEffect } from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Forms from "./components/Form/Forms";

// window.Telegram.WebApp()

function App(){
    const {tg, onTogleButton}=useTelegram();
    useEffect(()=>{
    tg.ready();
  }, [])

    return (

      <div className="App">
          Hello
          <Header/>

          <Routes>
              <Route path={'/'} element={<ProductList />} />
              <Route path={'/form'} element={<Forms />} />
          </Routes>


      </div>

    );
}

export default App;
