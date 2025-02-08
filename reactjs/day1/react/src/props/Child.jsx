// // import React from "react";
// // class Child extends React.Component{
// //     render()
// //     {
// //         return(
// //             <>
// //             </>
// //         )
// //     }
// // }
// // export default Child

// const Child = (Props) => {
//     console.log(Props);
//     // let {name, id, designation} = Props.obj
//   return (
//     <>
//     {/* <h1>my name is {Props.name}</h1> */}
//     {/* <h1>the id is {Props.id}</h1> */}
//     {/* <h1>{Props.arr}</h1> */}
//     {/* <h1>{name}, {id}, {designation}</h1> */}
//     <button onClick={()=>Props.fun1()}>Click</button>
//     </>
//   )
// }

// export default Child


// const Child = (props) => {
//   console.log(props);
  
//   return (
//     <>
    
//     </>
//   )
// }

// export default Child


const Child = (props) => {
    console.log(props);
    console.log(props.children);
    
    
  return (
    <>
        {props.children}
    </>
  )
}

export default Child