export default function buildMenuTab(content) {
  // <p>Tofu Bowl</p>
  // <img src="../images/menu1.jpg" />
  // <p>Salmon Bowl</p>
  // <img src="../images/menu2.jpg" />
  const div = document.createElement('div');
  const tofuTitle = document.createElement('p');
  const tofuImage = document.createElement('img');
  const salmonTitle = document.createElement('p');
  const salmonImage = document.createElement('img');
  tofuTitle.textContent = 'Tofu Bowl';
  tofuImage.src = '../images/menu1.jpg';
  salmonTitle.textContent = 'Salmon Bowl';
  salmonImage.src = '../images/menu2.jpg';
  div.classList.add('tab-content');
  content.appendChild(div);
  div.appendChild(tofuTitle);
  div.appendChild(tofuImage);
  div.appendChild(salmonTitle);
  div.appendChild(salmonImage);
  return div;
}
