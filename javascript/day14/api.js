let obj = {
    name: "kumar",
    id: 1,
    role: "developer"
}
console.log(obj);

let obj1 = JSON.stringify(obj)
console.log(obj1);

let obj2 = JSON.parse(obj1)
console.log(obj2);

// day15:

let a = window.fetch()
console.log(a);

window.fetch("data.json")
.then((data) => data.json())
.then((res) =>
{
    console.log(res);
    // console.log(res[0]);
    // console.log(res[1]);

res.map((x) => {
    console.log(x);
    console.log(x.name);
    console.log(x.id);

    document.body.innerHTML += `<h2>${x.name}</h2>`
    document.body.innerHTML += `<h2>${x.id}</h2>`

})
    
    
})


