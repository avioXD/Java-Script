console.log('This is cap4');
let cont = document.querySelector('.myClass');
console.log(cont);


console.log(cont.childNodes);
console.log(cont.children);
console.log(cont.childNodes[1].nodeName);
console.log(cont.childElementCount);


//Node Types:
/**
 * 1. Elements
 * 2. Attribute
 * 3. Text Node
 * 4. Comment
 * 5. document
 * 6. docType
 * 
 */

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('.myClass');

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);