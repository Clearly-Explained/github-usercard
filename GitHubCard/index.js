/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";

const mainCard = document.querySelector(".cards");
const getPromise = axios.get("https://api.github.com/users/Dionne-Stratton");

getPromise
  .then((response) => {
    console.log(response)
    console.log(response.data);
    const myData = createCard(response.data);
    mainCard.appendChild(myData)
  })
  .catch(error => {
    console.log("Error", error)
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
     tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
];

followersArray.map((element) => {
  axios
    .get(element)
    .then((res) => {
      const followersData = createCard;
      mainCard.appendChild(followersData(res.data));
    })
    .catch((error) => {
      console.log("Error", error)
    });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard({avatar_url, name, login, Location, html_url, followers, following, bio}) { 
  //instantiating the elements
  /*
  avatar_url = image url of user
  name = users name
  loginName = users user name
  Location = user location
  html_url = address to users github page
  followers = users followers count
  following = users following count
  bio = users bio
  */
  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const usersLoginName = document.createElement('p');
  const usersLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const usersGithubAddress = document.createElement('a');
  const usersFollowers = document.createElement('p');
  const usersFollowing = document.createElement('p');
  const userBio = document.createElement('p');

    //creating the hierarchy.
    card.appendChild(userImage);
    card.appendChild(cardInfo);
    cardInfo.appendChild(usersName);
    cardInfo.appendChild(usersLoginName);
    cardInfo.appendChild(usersLocation);
    cardInfo.appendChild(userProfile);
    userProfile.appendChild(usersGithubAddress);
    cardInfo.appendChild(usersFollowers);
    cardInfo.appendChild(usersFollowing);
    cardInfo.appendChild(userBio);
  //setting class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  usersLoginName.classList.add('username');
  //setting attributes and text
  userImage.src = avatar_url; 
  usersName.textContent = name;
  usersLoginName.textContent = login;
  usersGithubAddress.setAttribute('href', html_url);
  usersGithubAddress.textContent = `Profile: ${html_url}`;
  usersLocation.textContent = `Location: ${Location}`;
  userProfile.href= `Profile: ${html_url}`;
  usersFollowers.textContent = `Followers: ${followers}`;
  usersFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;
  return card;
}