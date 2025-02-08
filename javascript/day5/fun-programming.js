// function main(a)
// {
//     console.log(a);
//     console.log(a());
// }
// main(function(){
//     return "i am callbackf1"
// })

// main(function(){
//     return "i am callbackf2"
// })



// function constructor(task)
// {
//     console.log(task(10, 20));
// }
// constructor(function(a,b){
// return a+b;
// })
// constructor(function(a,b){
//     return a-b;
// })
// constructor(function(a,b){
//     return a*b;
// })

// arrow function
// let b=10
// let c=12
// let a = () => console.log(b+c);
//     console.log(a);
// a()


let main1 = (task) => {
    console.log(task(10,20));
}
main1((a,b) => {
    return a + b    
})
main1((a,b) => {
    return a - b    
})