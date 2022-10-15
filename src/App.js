import React, { useEffect } from 'react';
import Header from "./components/Header/Header";
// window.Telegram.WebApp()
const tg=window.Telegram.WebApp;
function App(){
  useEffect(()=>{
    tg.ready();
  }, [])

    return (
      <div className="App">
        <Header/>
        Test
      </div>
    );
}

export default App;
