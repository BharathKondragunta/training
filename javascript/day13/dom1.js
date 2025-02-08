let a = document.createElement("h1")
console.log(a);
a.textContent = "hello-world"

document.body.append(a)
a.style.backgroundColor = "yellow"

// step1 create an ol tag

let ol = document.createElement("ol")
console.log(ol);

let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react"
ol.append(li1)

let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "node.js"
ol.append(li2)

document.body.append(ol)

ol.style.border = "5px solid black"

let div = document.getElementById("demo")
console.log("div")

div.append(ol)
ol.setAttribute("type", "A")

let table = document.createElement("table")
console.log(table);
table.setAttribute("border", "3px solid black")
document.body.append(table)

let tr1 = document.createElement("tr")
console.log(tr1);
table.append(tr1);

let td1 = document.createElement("td")
console.log(td1);
td1.textContent = "node1"
tr1.append(td1);

let tr2 = document.createElement("tr")
console.log(tr2);
table.append(tr2);

let td2 = document.createElement("td")
console.log(td2);
td2.textContent = "node2"
tr2.append(td2);

let tr3 = document.createElement("tr")
console.log(tr3);
table.append(tr3);

let td3 = document.createElement("td")
console.log(td3);
td3.textContent = "node3"
tr3.append(td3);


