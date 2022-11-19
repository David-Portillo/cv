const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const skillType = entry.target.getAttribute("data-skill");
    const skill = entry.target.querySelector(`.${skillType}`);

    if (entry.isIntersecting) {
      skill.classList.add(`${skillType}-animation`);
      return;
    }
    skill.classList.remove(`${skillType}-animation`);
  });
});

document.querySelectorAll(".skill-container").forEach((element) => {
  observer.observe(element);
});
