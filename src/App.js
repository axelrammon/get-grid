import React, { useState } from 'react';

import './style.css';

function App() {

  const [ columns, setColumns ] = useState(1);
  const [ rows, setRows ] = useState(1);
  const [ cgap, setCgap ] = useState(0);
  const [ rgap, setRgap ] = useState(0);
  const [ divs, setDivs ] = useState([]);
  let [ mostrar, setMostrar ] = useState({ display: 'none' });
  let [ inputs, setInputs ] = useState({ display: 'block' });
  let [ nomeButton, setNomeButton ] = useState('Show code')

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
    
    setDivs(divs);
    mostrarCodigo();
  }
  
  function criarDivs() {
    
    let totalDivs = columns * rows;

    for (let i = 0; i < totalDivs; i++) {
      divs[i] = <div key={Math.random()}></div>;
      divs.length = totalDivs;
    }
    
    return divs.map(item => item);

  }

  function mostrarCodigo() {
    
    if (mostrar.display === 'none') {
      setMostrar(mostrar = {display: 'block'});
      setInputs(inputs = {display: 'none'});
      setNomeButton('Hide code');
    } else {
      setMostrar(mostrar = {display: 'none'});
      setInputs(inputs = {display: 'block'});
      setNomeButton('Show code');
    }

    console.log(mostrar)

  }
  
  let principalStyle = {

    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridGap: `${rgap}px ${cgap}px`,
  
  }

  const cores = {
    gridtemplatecolumns: `grid-template-columns: `,
    gridtemplatecolumnscode: `repeat(${columns}, 1fr);`,
  
    gridtemplaterows: `grid-template-rows: `,
    gridtemplaterowscode: `repeat(${rows}, 1fr);`,
    
    gridgapcolumn: `grid-column-gap: `,
    gridgapcolumncode: `${cgap}px;`,
    
    gridgaprow: `grid-row-gap: `,
    gridgaprowcode: `${rgap}px;`,
  
  }


  return (
    <div id="container">

      <div id="cabecalho">
        <h1>Get Grid CSS</h1>
        
        <div id="description">
          <p>
            Developed with ☕ by
            <a href="https://github.com/axelrammon" 
              target="_blank" rel="noopener noreferrer"> Axel Rammon
            </a>
          </p>
        </div>
      </div>

      <div id="conteudo">
        <div style={principalStyle} className="principal">
          {criarDivs(divs)}
        </div>
        <div className="codigo" style={mostrar}>
          <p><span>{cores.gridtemplatecolumns}</span>{cores.gridtemplatecolumnscode}</p>
          <p><span>{cores.gridtemplaterows}</span>{cores.gridtemplaterowscode}</p>
          <p><span>{cores.gridgapcolumn}</span>{cores.gridgapcolumncode}</p>
          <p><span>{cores.gridgaprow}</span>{cores.gridgaprowcode}</p>

          <button onClick={handleSubmit}>{nomeButton}</button>
        </div>
        <div className="dados" style={inputs}>
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
            <button onClick={handleSubmit}>{nomeButton}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
