console.log('Welcome to cap3 ');

let element = document.getElementById('div1Id');
console.log(element.length);
console.log(element.className);
console.log(element.parentNode);
element.style.color = 'red';
//element.innerText = 'Click to open facebook';
//element.innerHTML = `<a href="//facebook.com">Click facebook</a>`;



let sel = document.querySelector('#div1Id');
sel = document.querySelector('.red');
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel);

//Multi element selector:

let elems = document.getElementsByClassName('child');
elems = document.getElementById('profileButton');
console.log(elems);
elems.style.color = 'green';

elems = document.getElementsByClassName('myClass');
console.log(elems);


console.log(elems[1]);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'red';

});