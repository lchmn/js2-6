document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', event => {
    event.preventDefault(); // Попередження перезавантаження сторінки

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
      return alert('All fields must be filled!');
    }

    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);
    event.currentTarget.reset(); // Очищення форми
  });
});

