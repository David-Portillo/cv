//TODO: capture screen dimensions provided in chrome as constants

const smallScreenAndDown = window.matchMedia("(max-width: 450px)");
const mediumScreenAndUp = window.matchMedia("(min-width: 450px)");

const branding = document.getElementById("branding");

function updateBrandingStyle(screen) {
  console.log("in change");
  console.log(screen);
  const branding = document.getElementById("branding");

  // if (screen.matches) {
  //   branding.style.opacity = "0";
  //   branding.innerText = "DP.";
  //   // branding.style.opacity = "1";
  // } else {
  //   // branding.style.opacity = "0";
  //   branding.innerText = "David Portillo.";
  //   // branding.style.opacity = "1";
  // }
}

// Event Listeners

// smallScreenAndDown.addEventListener("change", (e) => {
//   updateBrandingStyle(e);
// });

window.addEventListener("load", (e) => {
  if (window.innerWidth <= 550) {
    // branding.style.opacity = "0";
    branding.innerText = "DP.";
  } else {
    branding.innerText = "David Portillo.";
  }
});

window.addEventListener("resize", () => {
  console.log(window.screen.availWidth);

  if (window.innerWidth <= 550) {
    // branding.style.opacity = "0";
    branding.innerText = "DP.";
  } else {
    branding.innerText = "David Portillo.";
  }
});
