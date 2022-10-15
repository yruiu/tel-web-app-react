import React, { useEffect } from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
// window.Telegram.WebApp()

function App(){
    const {tg, onTogleButton}=useTelegram();
    useEffect(()=>{
    tg.ready();
  }, [])

    return (
      <div className="App">
          <Header/>
        <button onClick={onTogleButton}>Togle</button>
      </div>
    );
}

export default App;
