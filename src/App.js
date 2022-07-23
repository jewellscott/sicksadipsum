import './App.css';
import { useState, useEffect } from 'react';
import { randomize } from './utils/randomize';
import { seasonOne } from './quotes/season-one';

function App() {

  const [ state, setState ] = useState({
    paraQty: 5,
    paraLength: 'medium',
    outputArr: [],
    output: `Tonight, on Sick, Sad World: a prime-time special about people just like you, only more pathetic. We were born in this room, we grew up in this room, and we thought we would die here... alone. But now you've arrived, and our lives can truly begin. Aren't you a little out of place here? And everywhere else on Earth? I got off. Enjoy prison.`,
    oneLiner: `My biggest fear right now is that I’ll wake up and this conversation won’t be a dream.`
  })

  const getIpsum = (e) => {
    e.preventDefault();
    setState({...state, outputArr: []})
    for (let i = 0; i < state.paraQty; i++) {
      randomize(seasonOne);
      let sentences = [];
      if (state.paraLength === 'short') {
        for (let i = 0; i < 3; i++) {
          sentences.push(seasonOne[i])
        }
      } else if (state.paraLength === 'medium') {
        for (let i = 0; i < 5; i++) {
          sentences.push(seasonOne[i])
        }
      } else {
        for (let i = 0; i < 7; i++) {
          sentences.push(seasonOne[i])
        }
      }
      let para = sentences.join(' ');
      state.outputArr.push(para);
    }
    let paras = state.outputArr.join('\n\n')
    // later: map nested arrays into p tags in the output
    setState({...state, output: paras});
    console.log(state.output);
    }  

 



  return (
    <div className="App container">
      <header>
        <h1>Sick, Sad Ipsum</h1>
        <p>{state.oneLiner}</p>
        <form onSubmit={getIpsum}>
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
          <input type="submit" value="Generate"/>
          <button className="copy">Copy to Clipboard</button>
        </form>
      </header>
      <main>
        <div className="textarea">
          <p>{state.output}</p>
          <p>{state.outputArr}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
