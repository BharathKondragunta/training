(function()
{
    console.log("hello-world");
}) ();

((a, b) => {
    console.log(a+b);
}) (10,10);

(function demo(){
    console.log("bharath");
}) ();

let arr1 = [10, 20, "hello", true, 1n]
console.log(arr1);

let obj = {
    name: "Rahul",
    id : 1,
    designation: "Developer",
    arr : [10, 20, 30],
    boolean : true,
    bigint : 1n,
    demo : function()
    {
        console.log("Hello");
        
    }
}
console.log(obj);
obj.demo();

