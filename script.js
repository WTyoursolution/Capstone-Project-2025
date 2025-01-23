"use strict";

const projects = [
  { name: "Driveway Boys", description: "A sleek and responsive website designed for a driveway services business, highlighting offerings and contact information.", githubLink: "https://wtyoursolution.github.io/Drivewayboys-Website/" },

  { name: "TinDog Website", description: "A fun, responsive landing page for a fictional dog dating app, combining playful design with modern web features. Created as a project in class.", githubLink: "https://wtyoursolution.github.io/Tindog-Page/" },

  { name: "Business Website", description: "Professional business website with a clean layout and responsive design to showcase services and company information", githubLink: "https://wtyoursolution.github.io/BusinessWebsite/"},
];
let websites = document.getElementById("websites");

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  const webCard = `
    <div class="card container mb-3" style="width: 18rem;">
         <div class="card-body row border border-black rounded" style="text-align: center; justify-items: center; background-color: rgb(210, 190, 190);">
            <div class="col">
      <h5 class="card-title">Project</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${project.name}</h6>
      <p class="card-text">${project.description}</p>
      <a href="${project.githubLink}" class="card-link">Click Here</a>
            <div>
        </div>
  </div>
    `;

  websites.innerHTML += webCard;
};

function handleSubmit(event) {
    event.preventDefault();
  }

document.getElementById("myButton").addEventListener('click', () => {
    document.getElementById("myOutput").innerText =`Thank You! You should recieve an email in 24 hours!`;
});