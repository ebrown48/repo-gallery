const overview = document.querySelector(".overview");
const username = "ebrown48";
const repoList = document.querySelector(".repo-list");
const reposInfo = document.querySelector(".repos");
const repoData =document.querySelector(".repo-data");

const profileInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    //console.log("userInfo");
    const data = await userInfo.json();
    displayInfo(data);
};

profileInfo();

const displayInfo = function (data) {
    const div =  document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
        <figure>
            <img alt="user avatar" src=${data.avatar_url} />
         </figure>
        <div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Bio:</strong> ${data.bio}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
        </div>
    `;
    overview.append(div);
    gitRepos();
};

const gitRepos = async function () {
    const fetchRepos = await fetch(`http://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repoData = await fetchRepos.json();
    displayRepos(repoData);
};

const displayRepos = function (repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(repoItem);
    }
};

repoList.addEventListener("click", function (e) {
    if (e.target.matches("h3")) {
        const repoName = e.target.innerText;
        
    }
};
matches(selectors)

document.pullData("").addEventListener("click", displayData);
console.log("pullData");
repoList.addEventListener("click", function (e) {
    if (e.target.matches("h3")) {
        const repoName = e.target.innerText;
        reposInfo(repoName);
    }
});



  
