(()=>{"use strict";function e(e){const t=document.createElement("div"),n=document.createElement("p"),d=document.createElement("img");return t.classList.add("tab-content"),n.textContent="Best food in D.C.",d.src="../images/bowl.jpg",d.alt="food bowl",e.appendChild(t),t.appendChild(n),t.appendChild(d),t}const t=document.getElementById("content"),n=document.getElementById("home"),d=document.getElementById("menu"),c=document.getElementById("contact");let a=n,o=e(t);function l(){a.classList.remove("active"),o.remove()}n.addEventListener("click",(()=>{l(),o=e(t),a=n,a.classList.add("active")})),d.addEventListener("click",(()=>{l(),o=function(e){const t=document.createElement("div"),n=document.createElement("p"),d=document.createElement("img"),c=document.createElement("p"),a=document.createElement("img");return n.textContent="Tofu Bowl",d.src="../images/menu1.jpg",c.textContent="Salmon Bowl",a.src="../images/menu2.jpg",t.classList.add("tab-content"),e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(a),t}(t),a=d,a.classList.add("active")})),c.addEventListener("click",(()=>{l(),o=function(e){const t=document.createElement("div"),n=document.createElement("h2"),d=document.createElement("p"),c=document.createElement("h2"),a=document.createElement("p");return n.textContent="Phone",d.textContent="555-555-5555",c.textContent="e-mail",a.textContent="real@defNotFake.com",t.classList.add("tab-content"),e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(a),t}(t),a=c,a.classList.add("active")}))})();