import './App.css';
import { useState } from 'react';
import { randomize } from './utils/randomize';
import { quotes } from './quotes/quotes';
import { defaultQuotes } from './quotes/default-quotes'

function App() {

  const [ state, setState ] = useState({
    paraQty: 5,
    paraLength: 'medium',
    outputArr: [],
    outputCopy: [],
    outputList: defaultQuotes.map(i => <p>{i}</p>),
    oneLiner: `My biggest fear right now is that I’ll wake up and this conversation won’t be a dream.`
  })

  const getIpsum = (e) => {
    e.preventDefault();
    setState({...state, outputArr: []})
    for (let i = 0; i < state.paraQty; i++) {
      randomize(quotes);
      let sentences = [];
      if (state.paraLength === 'short') {
        for (let i = 0; i < 3; i++) {
          sentences.push(quotes[i])
        }
      } else if (state.paraLength === 'medium') {
        for (let i = 0; i < 5; i++) {
          sentences.push(quotes[i])
        }
      } else {
        for (let i = 0; i < 7; i++) {
          sentences.push(quotes[i])
        }
      }
      let para = sentences.join(' ');
      state.outputArr.push(para);
    }
    setState({...state, outputList: state.outputArr.map(i => <p>{i}</p>), outputCopy: state.outputArr.join('\n\n'), outputArr: []})
  }  

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(state.outputCopy);
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
            onChange={(e) => setState({...state, paraLength: e.target.value})}
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
          <input type="submit" value="Generate" onClick={getIpsum}/>
          <button className="copy" onClick={handleCopy}>Copy to Clipboard</button>
        </form>
      </header>
      <main>
        <div className="textarea">
          {state.outputList}
        </div>
      </main>
    </div>
  );
}

export default App;
