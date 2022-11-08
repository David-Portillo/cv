const brandingEl = document.getElementById("branding");

function changeBrandingName() {
  const fullname = "David Portillo.";
  const abbreviatedName = "DP.";
  const mobileScreenWidth = 550;

  brandingEl.style.transform = "translate(-500px)";
  const resetBrandingPosition = () =>
    (brandingEl.style.transform = "translate(0px)");

  const interval = setInterval(() => {
    if (window.innerWidth <= mobileScreenWidth) {
      brandingEl.innerText = abbreviatedName;
      resetBrandingPosition();
    } else {
      brandingEl.innerText = fullname;
      resetBrandingPosition();
    }
    clearInterval(interval);
  }, 300);
}

// event Listeners

window.addEventListener("load", () => {
  changeBrandingName();
});

window.addEventListener("resize", () => {
  changeBrandingName();
});
