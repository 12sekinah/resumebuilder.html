document.addEventListener("DOMContentLoaded", () => {
    // Update resume preview as user types
document.getElementById('nameInput').addEventListener('input', () => {
  document.getElementById('previewName').innerText = document.getElementById('nameInput').value || 'Your Name';
});

document.getElementById('emailInput').addEventListener('input', () => {
  document.getElementById('previewEmail').innerText = document.getElementById('emailInput').value || 'Email';
});

document.getElementById('phoneInput').addEventListener('input', () => {
  document.getElementById('previewPhone').innerText = document.getElementById('phoneInput').value || 'Phone';
});

document.getElementById('educationInput').addEventListener('input', () => {
  document.getElementById('previewEducation').innerText = document.getElementById('educationInput').value || 'Your education details';
});

document.getElementById('experienceInput').addEventListener('input', () => {
  document.getElementById('previewExperience').innerText = document.getElementById('experienceInput').value || 'Your experience details';
});

document.getElementById('skillsInput').addEventListener('input', () => {
  document.getElementById('previewSkills').innerText = document.getElementById('skillsInput').value || 'Your skills';
});

// Print functionality
function printResume() {
  window.print();
}

// Toggle between themes
// function toggleTheme() {
//     console.log("button is clicked")
//   document.documentElement.classList.toggle('dark');
// }
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  console.log("Button is clicked");
});
})