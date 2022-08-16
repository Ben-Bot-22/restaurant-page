import './style.css';
import Img from './images/bowl.jpg';

export default function buildHomeTab(content) {
  //   const name = document.createElement('h1');
  const div = document.createElement('div');
  const subTitle = document.createElement('p');
  const image = document.createElement('img');
  //   name.textContent = "Ben's Bowls";
  div.classList.add('tab-content');
  subTitle.textContent = 'Best food in D.C.';
  image.src = Img;
  image.alt = 'food bowl';
  //   content.appendChild(name);
  content.appendChild(div);
  div.appendChild(subTitle);
  div.appendChild(image);
  return div;
}
