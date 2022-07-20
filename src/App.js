import './App.css';
import { useState } from 'react';
import { randomize } from './utils/randomize';
import { seasonOne } from './quotes/season-one';

function App() {

  const [ state, setState ] = useState({
    paraQty: 5,
    paraLength: 'medium',
    output: `Tonight, on Sick, Sad World: a prime-time special about people just like you, only more pathetic. We were born in this room, we grew up in this room, and we thought we would die here... alone. But now you've arrived, and our lives can truly begin. Aren't you a little out of place here? And everywhere else on Earth? I got off. Enjoy prison.`,
    oneLiner: `My biggest fear right now is that I’ll wake up and this conversation won’t be a dream.`
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const getIpsum = (e, arr) => {
    randomize(seasonOne);
  }



  return (
    <div className="App container">
      <header>
        <h1>Sick, Sad Ipsum</h1>
        <p>{state.oneLiner}</p>
        <form onSubmit={handleSubmit}>
          <label for="p-qty">Paragraph Number:</label>
          <input 
          className="p-qty"
          type="number" 
          value={state.paraQty}
          onInput={(e) => setState({...state, paraQty: e.target.value})}
          />
          <label for="p-length">Paragraph Length:</label>
          <select id="p-length">
            <option value="short">Short</option>
            <option value="medium" selected>Medium</option>
            <option value="long">Long</option>
          </select>
          <input type="submit" value="Generate"/>
          <button className="copy">Copy to Clipboard</button>
        </form>
      </header>
      <main>
        <div class="textarea">
          {state.output}
        </div>
      </main>
    </div>
  );
}

export default App;
