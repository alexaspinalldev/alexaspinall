// document.addEventListener('visibilitychange', () => {!document.hidden ? skillAnimation() : null; });

async function skillAnimation() {
  const skills = document.querySelectorAll('.skillCont svg');

  for (const skill of skills) {
    await new Promise(resolve => setTimeout(resolve, 100));
    skill.classList.toggle('skillHover');
    await new Promise(resolve => setTimeout(resolve, 300));
    skill.classList.toggle('skillHover');
  }
  await new Promise(resolve => setTimeout(resolve, 15000));
  skillAnimation(); // Loops
}
