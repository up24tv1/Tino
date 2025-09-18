// Wait for the DOM to be ready before manipulating content
document.addEventListener('DOMContentLoaded', () => {
  // Define a list of services offered. This array can be expanded or modified
  // without touching the HTML structure. Dynamic rendering keeps content
  // maintainable and shows how simple JavaScript can add functionality.
  const services = [
    'Handyman and home repair services',
    'Lawn care and landscaping',
    'Painting and drywall work',
    'Minor electrical and plumbing jobs',
    'Property maintenance and clean‑ups'
  ];

  // Find the <ul> element in the page
  const list = document.getElementById('services-list');

  // Populate the list dynamically
  services.forEach(service => {
    const li = document.createElement('li');
    li.textContent = service;
    list.appendChild(li);
  });

  // Insert current year into the footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});