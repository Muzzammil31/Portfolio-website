'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// Placeholder for contact form email sending logic
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const templateParams = {
      name: name,
      email: email,
      message: message
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');

          // Add message to the table
          const tbody = document.querySelector('#contact-page tbody');
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${name}</td>
              <td>${email}</td>
              <td>${message}</td>
          `;
          tbody.appendChild(newRow);

          // Clear form
          document.getElementById('contact-form').reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
      });
});
