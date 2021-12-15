let url = 'https://random-data-api.com/api/coffee/random_coffee';

const promise =  fetch(url);

const blend_name = document.getElementById('blend_name');
const intensifier = document.getElementById('intensifier');
const notes = document.getElementById('notes');
const origin = document.getElementById('origin');
const variety = document.getElementById('variety');

promise.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    blend_name.innerText = data.blend_name;
    intensifier.innerText = data.intensifier;
    notes.innerText = data.notes;
    origin.innerText = data.origin;
    variety.innerText = data.variety;
});