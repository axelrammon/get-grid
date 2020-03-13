import React, { useState } from 'react';

import './style.css';

function App() {

  const [ columns, setColumns ] = useState(1);
  const [ rows, setRows ] = useState(1);
  const [ cgap, setCgap ] = useState(0);
  const [ rgap, setRgap ] = useState(0);
  const [ divs, setDivs ] = useState();

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

    
    
    // const item = <div key={Math.random()}></div>
 
    // setDivs([].concat(divs, item));
  }
  const totalDivs = columns * rows;

  const principalStyle = {

    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,

  }

  return (
    <div id="container">
      
      <div id="cabecalho">

      </div>

      <div id="conteudo">
        <div style={principalStyle} className="principal">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="dados">
          <form>
            <label for="gtc">grid-template-columns:</label> 
            <input name="gtc" value={columns} onChange={handleColumns} type="number" placeholder="Columns"/><br/>
            <br/>
            <label for="gtr">grid-template-rows:</label> 
            <input name="gtr" value={rows} onChange={handleRows} type="number" placeholder="Rows"/>
            <br/><br/>
            <label for="ggc">grid-gap-colum:</label> 
            <input name="ggc" value={cgap} onChange={handleCgap} type="number" placeholder="Column gap"/>
            <br/><br/>
            <label for="ggr">grid-gap-row:</label> 
            <input name="ggr" value={rgap} onChange={handleRgap} type="number" placeholder="Row gap"/>
            <br/><br/>
            <button onClick={handleSubmit}>Mostrar código</button>
          </form>
        </div>
      </div>

      <div id="footer"></div>

    </div>
  );
}

export default App;
