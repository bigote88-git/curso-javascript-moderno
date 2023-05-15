import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { RenderApp } from './src/presentation/app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Chuck Norris Jokes</h1>
    <div id="my-app">
    </div>
  </div>
`;

RenderApp(document.querySelector("#my-app"));