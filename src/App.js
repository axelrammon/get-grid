import React, { useState } from 'react';

import './style.css';

function App() {

  const [ columns, setColumns ] = useState(1);
  const [ rows, setRows ] = useState(1);
  const [ cgap, setCgap ] = useState(0);
  const [ rgap, setRgap ] = useState(0);
  const [ divs, setDivs ] = useState([]);

  function handleColumns(e) {
    setColumns(e.target.value);
  }

  function handleRows(e) {
    setRows(e.target.value);    
  }

  function handleCgap(e) {
    setCgap(e.target.value);
  }
  
  function handleRgap(e) {
    setRgap(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // const mostrar = 
    //   ` grid-template-columns: repeat(${columns}, 1fr);
    //     grid-template-rows: repeat(${rows}, 1fr);
    //     grid-column-gap: ${cgap}px;
    //     grid-row-gap: ${rgap}px;
    //   `
    
    setDivs(divs);
  }
  
  function criarDivs() {
    
    let totalDivs = columns * rows;

    for (let i = 0; i < totalDivs; i++) {
      divs[i] = <div key={Math.random()}></div>;
      divs.length = totalDivs;
    }
    
    return divs.map(item => item);

  }

  const principalStyle = {

    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridGap: `${rgap}px ${cgap}px`,
  
  }

  return (
    <div id="container">

      <div id="cabecalho">
        <h1>Get Grid CSS</h1>
        <div id="description">
        <p>
          Developed with ☕ by
          <a href="https://github.com/axelrammon" 
            target="_blank" rel="noopener noreferrer"> Axel Rammon</a>
        </p>
      </div>
      </div>

      <div id="conteudo">
        <div style={principalStyle} className="principal">
          {criarDivs(divs)}
        </div>
        <div className="dados">
          <form>
            <label htmlFor="gtc">grid-template-columns:</label> 
            <input name="gtc" value={columns} onChange={handleColumns} type="number"/>
            <br/><br/>
            <label htmlFor="gtr">grid-template-rows:</label> 
            <input name="gtr" value={rows} onChange={handleRows} type="number"/>
            <br/><br/>
            <label htmlFor="ggc">grid-gap-colum:</label> 
            <input name="ggc" value={cgap} onChange={handleCgap} type="number"/>
            <br/><br/>
            <label htmlFor="ggr">grid-gap-row:</label> 
            <input name="ggr" value={rgap} onChange={handleRgap} type="number"/>
            <br/><br/>
            <button onClick={handleSubmit}>Show code</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
