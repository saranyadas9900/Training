document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        let valid = true;

        // Debugger statement to add a breakpoint
        debugger;

        // Name validation
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Phone validation
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^[+][0-9]{1,4}[ ][0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Invalid phone number format.';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Invalid email address.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Subject validation
        const subjectInput = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required.';
            valid = false;
        } else {
            subjectError.textContent = '';
        }

        // Message validation
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
