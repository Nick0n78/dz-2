const dropdownBtn = document.querySelector('.dropdown-button'); // Or use .dropdown-link selector
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('mouseover', () => {
  dropdownContent.style.display = 'block';
});

dropdownContent.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none';
});

// If using a link as the trigger, prevent default behavior on click:
dropdownBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent link navigation
});







function checkPassword() {
  var passwordInput = document.getElementById('password');
  var password = passwordInput.value;

  if (password === 'mykola') {
    alert('ОЙ ЯКИЙ МОЛОДЕЦЬ');
  } else {
    alert('НЕПРАВИЛЬНО, КУДИ ТИ ІДЕШ');
  }
}