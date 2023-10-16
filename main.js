/*******MODAL********/

const openModalButton = document.querySelector('[data-open-modal]');
const modal = document.querySelector('[data-modal]');
const closeModalButton = modal.querySelector('.close-modal-button');
const form = modal.querySelector('form');
const nameInput = form.elements.name;
const companyInput = form.elements.company;
const emailInput = form.elements.email;
const nameError = document.getElementById('name-error');
const companyError = document.getElementById('company-error');
const emailError = document.getElementById('email-error');
const thankYouMessage = modal.querySelector('.thank-you-message');

openModalButton.addEventListener('click', () => {
    modal.showModal();
});

closeModalButton.addEventListener('click', () => {
    modal.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        const name = nameInput.value;
        const company = companyInput.value;
        const email = emailInput.value;
        console.log('Name:', name);
        console.log('Company:', company);
        console.log('Email:', email);
        form.reset();
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    } else {
        form.reportValidity();
    }
});

nameInput.addEventListener('input', () => {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Please enter a valid name.';
    }
});

companyInput.addEventListener('input', () => {
    if (companyInput.validity.valid) {
        companyError.textContent = '';
    } else {
        companyError.textContent = 'Please enter a valid company name.';
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Please enter a valid email address.';
    }
});

/*******SWIPER*******/
console.log("Before Swiper Initialization");
const swiper = new Swiper(".clients__swiper", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 },
    },
    autoplay: {
        delay: 2500
    },
    centeredSlides: true,
    spaceBetween: 60,
});
console.log("After Swiper Initialization");