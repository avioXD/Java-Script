console.log("This is string operation");

const mess = "Welcome to My site";
let nameis = "Abhishek";
console.log(mess + " " + nameis);

let html;
html = "<h1> This is Heding </h1>" +
    "<p> This is paragraph </p>" +
    "";
html = html.concat(" Concating String");

console.log(html);
console.log(html.toLocaleLowerCase());
console.log(html.toUpperCase());
console.log(html.length);



console.log(html[8].toUpperCase());
console.log(html.indexOf('This'));
console.log(html.charAt(5));
console.log(html.endsWith("String"));
console.log(html.endsWith("This"));
console.log(html.includes("String"));
console.log(html.substring(4, 20));
console.log(html.slice(0, 8));
console.log(html.split(" "));
console.table(html.split(" "));


console.log(html = html.replace('This', 'It'));
console.log(html);



//using of inner html;

let username = "Abhishek";

let innerHtml = `<h1> Hello ${username.toUpperCase()} </h1>This your ready profile`;

document.getElementById("inner").innerHTML = innerHtml;