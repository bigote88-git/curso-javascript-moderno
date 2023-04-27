import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { MealAppComponent } from './components/meal/meal-app';

document.querySelector('#app').innerHTML = `
  <div>   
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>${import.meta.env.VITE_TITLE_APP}</h1>
    <div class="card">
      
    </div>
  </div>
`;
const divContainer = document.querySelector('.card');

MealAppComponent(divContainer);