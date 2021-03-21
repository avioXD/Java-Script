console.log("welcome to cap6");
var element = document.createElement("name");
let div = document.createElement('div');
var paragraph = document.createElement("P");
var text = document.createTextNode("This is a paragraph.");
var paragraph = document.createElement("P");
var text = document.createTextNode("This is a paragraph.");
paragraph.appendChild(text);
document.getElementById("myAnchor").setAttribute("href", "//facebook.com");
var h = document.getElementById("myAnchor").getAttribute("target");
let result = element.hasAttribute(name);
var h = document.getElementById("Btn").hasAttribute("onclick");
document.getElementById("myAnchor").removeAttribute("href");
let element1 = document.getElementById("myid1 ");
let element2 = document.createElement("u");
let content = document.createTextNode("Added Content");
element2.appendChild(content);
element1.replaceWith(element2);
parentDiv.replaceChild(sp1, sp2);

console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);