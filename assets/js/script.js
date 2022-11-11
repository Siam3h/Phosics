let btn_arch = document.querySelector('#button-arch');
let btn_plan = document.querySelector('#button-plan');
let btn_civil = document.querySelector('#button-civil');
let btn_submit_arch = document.querySelector('#button-submit-arch');
let btn_submit_plan = document.querySelector('#button-submit-plan');
let btn_submit_civil = document.querySelector('#button-submit-civil');
let contact_arch = document.querySelector('.contact-form-arch');
let contact_plan = document.querySelector('.contact-form-plan');
let contact_civil = document.querySelector('.contact-form-civil');
let Arch = document.querySelector('.Architecture');
let Plan = document.querySelector('.UrbanPlanning-Survey');
let Civil = document.querySelector('.Civil-Engineering');

btn_arch.addEventListener('click',switchArchetc);
btn_plan.addEventListener('click',switchPlanetc);
btn_civil.addEventListener('click',switchCiviletc);

btn_submit_arch.addEventListener('click', turnOffArch);
btn_submit_plan.addEventListener('click', turnOffPlan);
btn_submit_civil.addEventListener('click', turnOffCivil);

//Submitting Message
function turnOffArch() {
    contact_arch.style.display = 'none'
    Arch.style.display= 'block'
    alert('thank you, We will get back to you!')
};

function turnOffPlan() {
    contact_plan.style.display = 'none'
    Plan.style.display= 'block'
    alert('thank you, We will get back to you!')
};

function turnOffCivil() {
    contact_civil.style.display = 'none'
    Civil.style.display= 'block'
    alert('thank you, We will get back to you!')
};

//Calling Form
function switchArchetc() {
    Arch.style.display='none'
    contact_arch.style.display='block'
};

function switchPlanetc() {
    Plan.style.display='none'
    contact_plan.style.display='block'
};

function switchCiviletc() {
    Civil.style.display='none'
    contact_civil.style.display='block'
}