
import throttle from "lodash.throttle";

const formEl = document.querySelector(`.feedback-form`);
const emailEl = document.querySelector(`.feedback-form input`);
const messageEl = document.querySelector(`.feedback-form textarea`);
const formData = {};
const STORAGE_KEY = `feedback-form-state`;

formEl.addEventListener(`input`, throttle(onFormInput, 500));
formEl.addEventListener(`submit`, onFormSubmit);

populateForm();

function onFormInput(event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(`Submit form`);
    event.currentTarget.reset();    
    localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
    let saveForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveForm) {
        console.log(saveForm); 
        emailEl.value = saveForm.email;
        messageEl.value = saveForm.message;
    }
}
 