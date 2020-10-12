const GITHUB_API = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// let user = "agorodinskaya";

async function getUser(user) {
  const resp = await fetch(GITHUB_API + user);
  const respdata = await resp.json();
  console.log(respdata);
  createUserCard(respdata);
  getRepos(user);
}

async function getRepos(user) {
  const resp = await fetch(GITHUB_API + user + "/repos");
  const respdata = await resp.json();
  addRepos(respdata);
}

function createUserCard(user) {
  const cardHTML = `
  
  <div class = "card">
    <div>
        <img class = "avatar" src="${user.avatar_url}" alt="${user.name}"
    </div>
    <div class="user-info">
        <h2>${user.name === null ? user.login : user.name}</h2>
        <p>${user.bio}</p>
         <ul class="info">
            <li><strong>Followers: </strong>${user.followers}</li>
            <li><strong>Following: </strong>${user.following}</li>
            <li><strong>Repos: </strong>${user.public_repos}</li>
          </ul>
        <div id="repos"></div>
    </div>
  `;
  main.innerHTML = cardHTML;
  search.style.transform = `translateY(-30px)`;
  search.style.transition = `transform 0.3s ease-in-out`;
}

function addRepos(repos) {
  const reposEl = document.getElementById("repos");
  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
