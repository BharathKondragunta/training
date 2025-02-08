let btn = document.getElementById("demo")
console.log(btn);

btn.onclick = function() {
    // setTimeout(() => {
    //     let res = Math.round(Math.random()*100);
    //     console.log(res);
    // }, 2000);
    let res = Math.round(Math.random()*10000).toString(16)
        console.log(res);
    document.body.style.backgroundColor = `#${res}`
}

// let btn1 = document.getElementById("demo1")
// console.log(btn1);

// let color = window.prompt("enter the color")
// console.log(color);

// btn1.innerHTML = color

// btn1.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}` 
//     document.body.style.transitionDuration = "3s"
//     btn1.style.backgroundColor = `${color}`
// }

let input = document.getElementById("demo2")
console.log(demo2);

input.addEventListener("keypress", () => {
    let res = Math.round(Math.random()*10000).toString(16)
        console.log(res);
    document.body.style.backgroundColor = `#${res}`
})


VideoColorSpace.addEventListener("click" , () => {
    let res = VideoColorSpace.classlist
})