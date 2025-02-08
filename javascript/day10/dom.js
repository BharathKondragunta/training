// console.log(typeof document);
// console.log(window);
// console.log(document.doctype);
// console.log(document.head);111111111111111111111111
// console.log(document.body);
// console.log(document.title);
// document.title= "flipkart"1111111111111111111111111111
// console.log(document.h1);000000000000000
// console.log(document.links);
// console.log(document.links[0]);
// console.log(document.links[1]);111111111111111111111111111111111111111111111
// console.log(document.links[2]);
// document.links[0].href="http://www.youtube.com"
// document.links[1].href="http://www.flipkart.com"
// document.links[2].href="http://www.amazon.com"


// methods
// indirect access in dom
// -> document.getElementById("value")
// -> document.getElementsByClassName("value")000000000000000000000000
// -> document.getElementsByName("value")
// -> document.getElementsByTagName("value")
// -> document.querySelector("value");
// -> document.querySelectorAll("value");

// let a = document.getElementById("demo")
// console.log(a);
// console.log(a.textContent);11111111111111111111
// a.textContent = "batch-4"
// a.style.backgroundColor = "lightblue"
// a.style.textAlign = "center"

// let b = document.getElementsByClassName("demo1")
// console.log

// day11

// let c = document.getElementsByTagName("p")
// console.log(c);
// console.log(c[1]);
// console.log(c[1].textContent);
// c[1].textContent = "hello"
// c[1].style.border = "Spx solid red"

// let d = document.getElementsByTagName("span")
// console.log(d);
// console.log(d[1]);




// document.querySelector
// --> we have to pass value with css-symbol
// --> will returns reference od an first-element.

let e= document.querySelector("#demo");
console.log(e);

let e1 = document.querySelector(".demo1");
console.log(e1);

// document.querySelectorAll
// --> we have to pass value with css-symbol
// --> will return referebce in a node-list

let a = document.querySelectorAll("#demo");
console.log(a);
console.log(a[0]);

let a1 = document.querySelectorAll(".demo1");
console.log(a1);
console.log(a1[1]);

 