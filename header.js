
let appHeader = `
  <h1>Vile Beggar's repository of random stuff</h1>
  <hr>
`;


let appFooter = `
  Last updated: 28/03/2025
`;

let appSidebar = `
  <h3>Sidebar</h3>
  <hr>
  <h4 class = "sidebartitle"><img src="./assets/document.png" class="sidebaricon">Content:</h4>
  <ul class = "sidebarlist">
      <li><a href="./index.html">Main</a></li>
      <li><a href="./art.html">Art</a></li>
      <li><a href="./blog.html">Blog</a></li>
      <li><a href="https://vilebeggar.atabook.org/" target="_blank" rel="noopener noreferrer">Guestbook</a></li>
  </ul>
  <h4 class = "sidebartitle"><img src="./assets/smile.png" class="sidebaricon">Friends:</h4>
  <ul class = "sidebarlist">
      <li><a href="https://nonk.dev/">nonk</a></li>
      <li><a href="https://cantsleep.cc/">can't sleep</a></li>
  </ul>   
`;

document.getElementById("header").innerHTML = appHeader;
document.getElementById("footer").innerHTML = appFooter;
document.getElementById("sidebar").innerHTML = appSidebar;
