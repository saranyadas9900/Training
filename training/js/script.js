function validateName() {
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.innerHTML = "Please enter your name.";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    const phoneError = document.getElementById('phoneError');
    if (!phone || !phoneRegex.test(phone)) {
        phoneError.innerHTML = "Please enter a valid phone number.";
        return false;
    } else {
        phoneError.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById('emailError');
    if (!email || !emailRegex.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

function validateSubject() {
    const subject = document.getElementById('subject').value.trim();
    const subjectError = document.getElementById('subjectError');
    if (!subject) {
        subjectError.innerHTML = "Please enter a subject.";
        return false;
    } else {
        subjectError.innerHTML = "";
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (!message) {
        messageError.innerHTML = "Please enter a message.";
        return false;
    } else {
        messageError.innerHTML = "";
        return true;
    }
}

function validateForm() {
    const isValidName = validateName();
    const isValidPhone = validatePhone();
    const isValidEmail = validateEmail();
    const isValidSubject = validateSubject();
    const isValidMessage = validateMessage();
    
    if (isValidName && isValidPhone && isValidEmail && isValidSubject && isValidMessage) {
        alert("Registration successful!");
        return true;
    } else {
        return false;
    }
}

// Attach event listeners to form fields
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('subject').addEventListener('input', validateSubject);
document.getElementById('message').addEventListener('input', validateMessage);

// Attach event listener to form submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
