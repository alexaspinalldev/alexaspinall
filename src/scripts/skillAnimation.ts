// document.addEventListener('visibilitychange', () => { !document.hidden ? skillAnimation() : null; });
document.addEventListener('DOMContentLoaded', () => skillAnimation());

async function skillAnimation() {
  const skills = document.querySelectorAll('.skillCont svg'); // Select all SVG elements

  for (const skill of skills) {
    const svgSkill = skill as SVGSVGElement; // Cast to SVGSVGElement

    await new Promise(resolve => setTimeout(resolve, 100));

    // Apply effect
    svgSkill.style.filter = 'none';
    svgSkill.classList.toggle('scale-110');
    svgSkill.classList.toggle('drop-shadow-xl');

    await new Promise(resolve => setTimeout(resolve, 400));

    // Remove effect
    svgSkill.style.filter = '';
    svgSkill.classList.toggle('scale-110');
    svgSkill.classList.toggle('drop-shadow-xl');
  }

  await new Promise(resolve => setTimeout(resolve, 15000));
  skillAnimation(); // Loops
}
