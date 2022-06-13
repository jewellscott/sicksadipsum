import './App.css';
import { useState } from 'react';
import { randomize } from './utils/randomize';

function App() {

  // const [ paraLength, setParaLength ] = useState('');
  const [ paraQty, setParaQty ] = useState(5);

  const [ ipsum, getIpsum ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  

  return (
    <div className="App container">
      <header>
        <h1>Sick, Sad Ipsum</h1>
        <p>My biggest fear right now is that I’ll wake up and this conversation won’t be a dream.</p>
        <form onSubmit={handleSubmit}>
          <label for="p-qty">Paragraph Number:</label>
          <input 
          className="p-qty"
          type="number" 
          value={paraQty}
          onInput={(e) => setParaQty(e.target.value)}
          />
          <label for="p-length">Paragraph Length:</label>
          <select id="p-length">
            <option value="short">Short</option>
            <option value="medium" selected>Medium</option>
            <option value="long">Long</option>
          </select>

          <input type="submit" value="Generate"/>
          <button className="copy"><img src="https://img.icons8.com/pix/32/undefined/experimental-copy-pix.png" alt="Copy to Clipboard"/></button>
        </form>
      </header>
      <main>
        <div class="textarea">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum ante libero, a imperdiet orci sagittis et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget condimentum arcu. In in lectus eros. Nam eget auctor orci. Vestibulum eget tempus lorem. Pellentesque bibendum aliquam finibus. Nam ac leo ut nunc rhoncus cursus. Maecenas iaculis vitae ante vitae consequat.
          <br/>
          <br/>
          Vestibulum in orci libero. Quisque ac dolor nulla. Etiam pharetra sapien vel ultricies gravida. Sed porta gravida luctus. Proin dui nisi, venenatis nec eleifend sit amet, ullamcorper a nulla. Cras molestie tristique nisl, in finibus dolor elementum non. Ut non ex non erat scelerisque faucibus. Quisque ut eros sit amet orci vehicula mattis.
          <br/>
          <br/>
          Nullam dui nisl, ullamcorper ut porttitor nec, eleifend sed justo. Curabitur turpis tellus, ullamcorper eu justo quis, euismod sollicitudin lectus. Pellentesque a commodo orci, sagittis sollicitudin sapien. Morbi sodales libero metus, nec condimentum diam posuere vel. Curabitur eget vestibulum massa, non bibendum urna. Duis venenatis est ut leo posuere, vel dapibus velit vulputate. Morbi sagittis, turpis non tempus ultrices, neque elit suscipit ex, vel pretium enim tellus in nisl. Integer rhoncus ipsum id congue viverra. Phasellus ultricies arcu id arcu rutrum, luctus mattis purus egestas.
          <br/>
          <br/>
          Ut vehicula pretium tortor, id ornare ligula viverra a. Nullam et sollicitudin metus. Phasellus dignissim risus et mauris sagittis, ut vehicula metus vestibulum. Duis mattis sem nec odio suscipit, ut rutrum odio fringilla. Suspendisse potenti. In dictum ut erat eget rutrum. Fusce urna arcu, mollis ac placerat vel, porta eu erat. Donec a laoreet felis, quis commodo urna. Praesent consequat elit in ex eleifend, facilisis finibus lectus molestie. Nullam sed velit vitae diam euismod consequat vel et eros. Pellentesque vitae ante egestas justo tincidunt posuere.
          <br/>
          <br/>
          Suspendisse at quam quis ante gravida auctor ut tincidunt sapien. Nunc metus dui, gravida vel enim id, consequat sagittis velit. Proin posuere massa eu tristique elementum. Sed porttitor tristique volutpat. Nunc vel sem quis massa lacinia sagittis. Duis ultrices lorem vitae dui pellentesque, eu hendrerit dui mattis. Donec pellentesque congue magna, varius ornare nisi tincidunt ut. Aenean lorem ante, faucibus id tortor ut, viverra accumsan elit.
        </div>
      </main>
    </div>
  );
}

export default App;
