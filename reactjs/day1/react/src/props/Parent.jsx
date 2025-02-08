// // import React from "react";
// // import Child from "./Child";
// // class Parent extends React.Component{
// //     state = {
// //         Username : "Narender"
// //     }
// //     render()
// //     {
// //         return(
// //             <>
// //             <Child name = {this.props.Username}/>
// //             </>
// //         )
// //     }
// // }
// // export default Parent;

// import { Children } from "react"

// import { Children } from "react"
// import Child from "./Child"

// import Child from "./Child"


// const Parent = () => {
//     // let a = {
//     //     name: "jashwanth",
//     //     id : 275,
//     //     designation : "student"

//     // }
//   return (
//     <>
//     {/* <Child name="Bharth"/> */}
//     {/* <Child id = {10}/> */}
//     {/* <Child obj={a}/> */}
//     <Child/>
//     </>
//   )
// }

// export default Parent


// const Parent = () => {
//   return (
//     <>
//       <Child>
//         <Children>
//           i am a child.
//         </Children>
//       </Child>
//     </>
//   )
// }

// export default Parent

import Child from './Child'

const Parent = () => {
  return (
    <>
    <Child>
        <p>hello</p>
    </Child>
    </>
  )
}

export default Parent