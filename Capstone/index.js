import Home from './Home';
import Stats from './Stats';
import Schedule from './Schedule';

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
      ${Home(state)}
      ${Schedule(state)}
      ${Stats(state)}
    `;
}
  
render(Home); // start by rendering the landing page