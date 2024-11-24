import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "Marco "} ${variables.lastName ||
    "Ortiz Valencia "}</h1>
          <h2>${variables.role || "Full Stack Developer"}</h2>
          <h3>${variables.country || "Spain"} ${variables.city || "Murcia"}</h3>
          <h3>${variables.twitter || "Twitter.com"} ${variables.github ||
    "Marco-MOV"} ${variables.linkedin || "LinkedIn.com"}</h3>

          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/Marco-MOV/${
              variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/_just.me.marco/${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-9/202793947_1190798978026732_4453869773998267029_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=J0HIz07CAMIQ7kNvgF7KWjv&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AXm5AvLrJp3U2xjuJZeCw1Q&oh=00_AYCKB5BGTh5AskyaF4YRfBq3mPHefRb3sYaal8Sh7N2ANA&oe=6767886A",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/283539109_1406027979837163_3120391208922227068_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=lwmEsGrjicYQ7kNvgEr8ug8&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AnnM6HZdjZEjBy9LF7UrBvw&oh=00_AYAygABQY3ySAcFyUU9cJ3zd3DeLwz8d-snjF0SVz6xabA&oe=6745EA6B",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
