document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for contacting CEPHACO. We will get back to you soon.');
      form.reset();
    });
  }
});
