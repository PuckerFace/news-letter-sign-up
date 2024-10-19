const emailForm = document.getElementById('form');
const signupCard = document.getElementById('signup');
const popupCard = document.getElementById('popup');

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

emailForm.addEventListener('click', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  if (validateEmail(emailInput.value)) {
    errorMessage.textContent = '';
    signupCard.classList.toggle('hidden');
    popupCard.classList.toggle('hidden');
  } else {
    errorMessage.textContent = 'Valid email required';
    errorMessage.style.color = 'hsl(4, 100%, 67%)';
    emailInput.style.backgroundColor = 'hsla(4, 94%, 68%, 0.26)';
    emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
  }
});
