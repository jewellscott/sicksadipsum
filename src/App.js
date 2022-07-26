import './App.css';
import { useState } from 'react';
import { defaultQuotes } from './quotes/default-quotes'
import { getParagraphs } from './utils/get-paragraph';

function App() {

  const [ state, setState ] = useState({
    paraQty: 5,
    paraLength: 5,
    outputArr: defaultQuotes,
    oneLiner: `My biggest fear right now is that I’ll wake up and this conversation won’t be a dream.`
  })

  const getIpsum = (e) => {
    e.preventDefault();
   let paraArr = getParagraphs(state.paraQty, state.paraLength);

    setState({...state, outputArr: paraArr})
  }  

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(state.outputArr.join('\n\n'));
  }

  return (
    <div className="App container">
      <header>
        <h1>Sick, Sad Ipsum</h1>
        <p>{state.oneLiner}</p>
        <form>
          <label htmlFor="p-qty">Paragraph Number:</label>
          <input 
          className="p-qty"
          type="number" 
          value={state.paraQty}
          onInput={(e) => setState({...state, paraQty: e.target.value})}
          />
          <label htmlFor="p-length">Paragraph Length:</label>
          <select 
            id="p-length" 
            value={state.paraLength} 
            onChange={(e) => setState({...state, paraLength: +e.target.value})}
          >
            <option value="3">Short</option>
            <option value="5">Medium</option>
            <option value="7">Long</option>
          </select>
          <input type="submit" value="Generate" onClick={getIpsum}/>
          <button className="copy" onClick={handleCopy}>Copy to Clipboard</button>
        </form>
      </header>
      <main>
        <div className="textarea">
          {state.outputArr.map(i => <p>{i}</p>)}
        </div>
      </main>
    </div>
  );
}

export default App;
