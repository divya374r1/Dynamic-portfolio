const projects = [
  { title: "Portfolio Website", description: "Made with HTML, CSS, JS", link: "#" },
  { title: "Calculator App", description: "Simple JavaScript calculator", link: "#" }
];

const projectList = document.getElementById('project-list');

projects.forEach(p => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><a href="${p.link}">View</a>`;
  projectList.appendChild(div);
});
