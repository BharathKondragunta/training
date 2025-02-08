function main(m, n)
{
    setTimeout(() => {

    }, 5000)
}
main(1,"10a");

function simple()
{
    console.log("no's are printed")
}
simple();




//Promise function
function main(m, n)
{
    new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(i=m; i<=n; i++)
            {
                console.log(i);
            }
            return resolve()
        } , 5000)
        })
        .then(() => console.log("Promise resolved"))
        .catch(() => console.log("error"))
}
main(1,10);

function simple()
{
    console.log("no's are printed")
}
simple();

// another promise function
function main(m, n)
{
    new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(i=m; i<=n; i++)
            {
                console.log(i);
            }
            return resolve()
        } , 5000)
        })
        .then(() => console.log("Promise resolved"))
        .catch(() => console.log("error"))
}
main(1,"10a");

function simple()
{
    console.log("no's are printed")
}
simple();
