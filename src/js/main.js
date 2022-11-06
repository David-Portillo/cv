//TODO: capture screen dimensions provided in chrome as constants

const smallScreenAndDown = window.matchMedia("(max-width: 450px)");
const mediumScreenAndUp = window.matchMedia("(min-width: 450px)");

function updateBrandingStyle(screen) {
  console.log("in change");
  console.log(screen);
  const branding = document.getElementById("branding");

  if (screen.matches) {
    branding.style.opacity = "0";
    branding.innerText = "DP.";
    branding.style.opacity = "1";
  } else {
    branding.style.opacity = "0";
    branding.innerText = "David Portillo.";
    branding.style.opacity = "1";
  }
}

// Event Listeners

smallScreenAndDown.addEventListener("change", (e) => {
  updateBrandingStyle(e);
});

window.addEventListener("load", (e) => {
  updateBrandingStyle(e);
});
