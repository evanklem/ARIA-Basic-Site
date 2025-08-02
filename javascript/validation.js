// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Select all the necessary elements from the DOM
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('form-status');

  // Helper function to show an error message
  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
  }

  // Helper function to clear an error message
  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove('invalid');
    input.setAttribute('aria-invalid', 'false');
  }

  // Helper function to validate an email format using a regular expression
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Must be in the format of something@something.something
    return regex.test(email);
  }

  // Add a 'submit' event listener to the form
  form.addEventListener('submit', (event) => {
    // Prevent the default form submission which reloads the page
    event.preventDefault();

    let isValid = true;

    // Clear all previous errors before validating again
    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
    formStatus.style.display = 'none';

    // --- Validation Checks ---

    // 1. Validate Name
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required.');
      isValid = false;
    }

    // 2. Validate Email
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required.');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    // 3. Validate Message
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Message is required.');
      isValid = false;
    }

    // Final Action

    if (isValid) {
      // If the form is valid, show a success message
      formStatus.textContent = 'Thank you! Your message has been sent.';
      formStatus.className = 'success';
      formStatus.style.display = 'block';

      // Clear the form fields
      form.reset();
    } else {
      // If the form is invalid, show a general error message
      formStatus.textContent = 'Please correct the errors above before submitting.';
      formStatus.className = 'error';
      formStatus.style.display = 'block';
    }
  });
});