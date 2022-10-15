import React, { useEffect } from 'react';
const tg=window.Telegram.WebApp
// window.Telegram.WebApp()
function App(){
  useEffect(()=>{
    tg.ready();
  }, [])
  const onClose=()=>{
    tg.close()
  };
    return (
      <div className="App">
        Test
        <button onClick={onClose}>Close</button>
      </div>
    );
}

export default App;
