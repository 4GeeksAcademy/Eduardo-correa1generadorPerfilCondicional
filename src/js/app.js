import "../style/index.css";

function render(variables = {}) {
  console.log("these are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  const socialMediaPositionClass =
    variables.socialMediaPosition === "position-left"
      ? "position-left"
      : "position-right";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "Name"} ${
    variables.lastName ? variables.lastName : "Last Name"
  }</h1>
          <h2>${variables.role ? variables.role : "Choose a Role"}</h2>
          <h3>${variables.city ? variables.city : "City"}, ${
    variables.country ? variables.country : "Country"
  }</h3>
          <ul class="${socialMediaPositionClass}">
            <li><a href="${
              variables.twitter ? variables.twitter : "https://twitter.com"
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${
              variables.github ? variables.github : "https://github.com"
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin ? variables.linkedin : "https://linkedin.com"
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram
                ? variables.instagram
                : "https://instagram.com"
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>`;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
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
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      if (attribute === "socialMediaPosition") {
        render(Object.assign(window.variables, values));
      } else {
        render(Object.assign(window.variables, values));
      }
    });
  });
};
