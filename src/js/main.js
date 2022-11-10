const brandingEl = document.getElementById("branding");

function changeBrandingName() {
  const fullname = "DP";
  const abbreviatedName = "DP";
  const mobileScreenWidth = 550;

  if (window.innerWidth <= mobileScreenWidth) {
    brandingEl.innerText = abbreviatedName;
  } else {
    brandingEl.innerText = fullname;
  }
}

// event Listeners

window.addEventListener("load", () => {
  changeBrandingName();
});

window.addEventListener("resize", () => {
  changeBrandingName();
});
