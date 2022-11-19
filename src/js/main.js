const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    const skillType = entry.target.getAttribute("data-skill");
    console.log(skillType);
    const skill = entry.target.querySelector(`.${skillType}`);
    // const skillJS = entry.target.querySelector(".html");
    // console.log(skillJS);

    // console.log(entry);

    if (entry.isIntersecting) {
      skill.classList.add(`skill-${skillType}-animation`);
      // skillJS.classList.add("skill-javascript-animation");
      return;
    }

    // skillHTML.classList.remove("skill-html-animation");
    // skillJS.classList.remove("skill-javascript-animation");

    skill.classList.remove(`skill-${skillType}-animation`);
  });
});

// observer.observe(document.querySelector(".html-skill-wrapper"));
// observer.observe(document.querySelector(".js-skill-wrapper"));

document.querySelectorAll(".skill-wrapper").forEach((element) => {
  observer.observe(element);
});
