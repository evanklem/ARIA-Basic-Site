// Select all elements (DOM root) with the class 'faq-question'
const questions = document.querySelectorAll('.faq-question');

// Loop through each question
questions.forEach(question => {
  // Add a click event listener to each question (DOM element)
  question.addEventListener('click', () => {
    // The answer is the next sister element of the question button
    const answer = question.nextElementSibling;

    // Toggle the 'active' class on the question to change plus or minus symbols (modify DOM element)
    question.classList.toggle('active');

    // Check if the answer is currently shown
    if (answer.style.maxHeight) {
      // If it's shown, hide it by setting maxHeight to null
      answer.style.maxHeight = null;
      answer.style.padding = "0 10px"; // Collapse padding
    } else {
      // If it's hidden, show it by setting maxHeight to its scroll height
      // scrollHeight is the actual height of the content
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = "20px 10px"; // Add padding when open
    }
  });
});