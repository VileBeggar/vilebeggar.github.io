
let appHeader = `
  <h1>Vile Beggar's repository of random stuff</h1>
  <hr>
`;

const date = new Date(document.lastModified);
const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

let appFooter = `
  Last updated: ${formattedDate} | Source code: <a href="https://github.com/VileBeggar/vilebeggar.github.io" target=_blank>https://github.com/VileBeggar/vilebeggar.github.io</a>
`;

let appSidebar = `
  <h3>Sidebar</h3>
  <hr>
  <h4 class = "sidebartitle"><img src="./assets/document.png" class="sidebaricon">Content:</h4>
  <ul class = "sidebarlist">
      <li><a href="./index.html">Main</a></li>
      <li><a href="./art.html">Art</a></li>
      <li><a href="./blog.html">Blog</a></li>
      <li><a href="./clips.html">Clips</a></li>
      <li><a href="https://vilebeggar.atabook.org/" target="_blank" rel="noopener noreferrer">Guestbook</a></li>
  </ul>
  <h4 class = "sidebartitle"><img src="./assets/smile.png" class="sidebaricon">Friends:</h4>
  <ul class = "sidebarlist">
      <li><a href="https://nonk.dev/">nonk</a></li>
      <li><a href="https://cantsleep.cc/">can't sleep</a></li>
  </ul>`;

chattable.initialize({
    stylesheet : "chattable.css"
});

document.getElementById("header").innerHTML = appHeader;
document.getElementById("footer").innerHTML = appFooter;
document.getElementById("sidebar").innerHTML = appSidebar;
