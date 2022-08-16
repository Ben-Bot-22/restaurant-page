import './style.css';

export default function buildContactTab(content) {
  // <h2>Phone</h2>
  // <p>555-555-5555</p>
  // <h2>E-mail</h2>
  // <p>real@defNotFake.com</p>
  const div = document.createElement('div');
  const phone = document.createElement('h2');
  const phoneNumber = document.createElement('p');
  const email = document.createElement('h2');
  const address = document.createElement('p');
  phone.textContent = 'Phone';
  phoneNumber.textContent = '555-555-5555';
  email.textContent = 'e-mail';
  address.textContent = 'real@defNotFake.com';
  div.classList.add('tab-content');
  content.appendChild(div);
  div.appendChild(phone);
  div.appendChild(phoneNumber);
  div.appendChild(email);
  div.appendChild(address);
  return div;
}
