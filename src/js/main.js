//TODO: capture screen dimensions provided in chrome as constants

const fullname = "David Portillo.";
const abbreviatedName = "DP.";
const mobileScreenWidth = 550;
const brandingEl = document.getElementById("branding");

function changeBrandingName() {
  if (window.innerWidth <= mobileScreenWidth) {
    return (brandingEl.innerText = abbreviatedName);
  }
  return (brandingEl.innerText = fullname);
}

// Event Listeners

window.addEventListener("load", () => {
  changeBrandingName();
});
