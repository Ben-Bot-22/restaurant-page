import buildHomeTab from './home';
import buildMenuTab from './menu';
import buildContactTab from './contact';
import './style.css';

const content = document.getElementById('content');
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

let lastTab = homeTab;
let lastParent = buildHomeTab(content);

function resetLastTab() {
  // remove underline from last tab
  lastTab.classList.remove('active');
  // remove parent from DOM
  lastParent.remove();
}

homeTab.addEventListener('click', () => {
  resetLastTab();
  // buildNewTab
  lastParent = buildHomeTab(content);
  // underline new tab
  lastTab = homeTab;
  lastTab.classList.add('active');
});

menuTab.addEventListener('click', () => {
  resetLastTab();
  // buildNewTab
  lastParent = buildMenuTab(content);
  // underline new tab
  lastTab = menuTab;
  lastTab.classList.add('active');
});

contactTab.addEventListener('click', () => {
  resetLastTab();
  // buildNewTab
  lastParent = buildContactTab(content);
  // underline new tab
  lastTab = contactTab;
  lastTab.classList.add('active');
});
