async function getData(userId) {
    let baseURL = "https://api.github.com/users/";
    if (!userId) {
      userId = "sgravani";
    }
    let response = await fetch(baseURL + userId);
    let userData = await response.json();
    //console.log(userData);
    createUserCard(userData);
    // return userData;
  }
  function createUserCard(userData) {
    const {
      avatar_url,
      name,
      bio,
      followers,
      following,
      twitter_username,
      location,
      public_repos
    } = userData;
    let b = `<p id="bio">${bio}</p>`;
  
    let main = document.getElementById("main");
    if (name == null) {
      main.innerHTML = `<div class="errorMsg">
      
  <img src="./no-record.png">
  
  <h1 class="error-msg-section">Enter Valid UserName!!!</h1>
  
  </div>`;
    } else {
      main.innerHTML = "";
      main.innerHTML = `<div class="card-body">
  <div class="avtar-holder">
      <img src="${avatar_url}"/>
  </div>
  <div class="card-data">
      <h2 class="card-title">${name}</h2>
     
      ${bio ? b : ""}
      <div class="card-subdata-outer">
      <div id="row1">
      <div id="item1" ><span class="item-title">Followers : </span>${
        " " + followers
      }</div>
      <div id="item2" ><span class="item-title">Following :</span>${
        " " + following
      }</div>
      <div id="item3"> <span class="item-title">Repos :</span>${
        " " + public_repos
      }</div>
     </div>
       <div id="row2">
      <div id="item4" ><span class="item-title">Twitter :</span>${
        " " + (twitter_username ? twitter_username : "Not Available")
      }</div>
      <div id="item5" ><span class="item-title">Location :</span>${
        " " + (location ? location : "Not Available")
      }</div>
     </div>
      </div>
  
  </div>
  </div>
  `;
    }
  }
  export { getData };
  