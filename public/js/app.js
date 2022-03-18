const form = document.querySelector('.searchform');
const load = document.querySelector('.loading');
const userbox = document.querySelector('.user-box')
const locat1 = document.querySelector('.locationtext');
const locat = document.querySelector('.locationinput');
const box = document.querySelectorAll('.box');
const textbox = document.querySelectorAll('.textinfo');
const container = document.querySelector('.container');
console.log(textbox[1]);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input_location= locat.value.trim();
    userbox.classList.toggle('display-none');
    load.classList.toggle('display-none');
    fetch("/weather?location="+input_location)
    .then((response) => {
        response.json().then((data) => {
            console.log(data);
            textbox[0].innerText = data.address;
            textbox[1].innerText = data.temperature+' \u00B0C';
            textbox[2].innerText = data.humidity;
            textbox[3].innerText = data.temperature;
            load.classList.toggle('display-none');
            container.classList.toggle('display-none')
        });
    })
    .catch((error) => console.log(error));
});

box.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log(box.lastElementChild);
        if(box.lastElementChild.classList.contains('display-none'))
        {
            box.lastElementChild.classList.toggle('display-none');
            box.firstElementChild.style.transform = 'translate(0,-60px)';
        }
        else
        {
            box.lastElementChild.classList.toggle('display-none');
            box.firstElementChild.style.transform = 'translate(0,0px)';
        }

    })
});
