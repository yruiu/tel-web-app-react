import React, { useEffect } from 'react';
import Header from "./components/Header/Header";
import {useTelegram} from "./components/hooks/useTelegram";
// window.Telegram.WebApp()

function App(){
    const {tg, onToogleButton}=useTelegram();
    useEffect(()=>{
    tg.ready();
  }, [])

    return (
      <div className="App">
        <button onClick={onToogleButton}></button>
      </div>
    );
}

export default App;
