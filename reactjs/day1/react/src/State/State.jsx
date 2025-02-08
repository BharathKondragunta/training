// import { useState } from "react"

// const State = () => {
//     let [State, setState] = useState("abhi")
//     console.log(State);
//     console.log(setState);

//     let demo = () => {
//         setState("rahul")
//     }
//   return (
//     <>
//     <h1>{State}</h1>
//     <button onClick={demo}>Click</button>
//     </>
//   )
// }

// export default State



// incrementing and decrementing the number 

// import { useState } from "react"

// const State = () => {
//   let[state, setstate] = useState(0)

//   let incr = () =>{
//     setstate(state + 1)
//   }

//   let reset = () =>{
//     setstate(0)
//   }

//   let derc = () =>{
//     setstate(state - 1)
//   }
//   return (
//     <>
//       <h1>{state}</h1>
//       <button onClick={incr}>increment</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={derc}>decrement</button>    
//     </>
//   )
// }

// export default State


// react-form
// 1> controlled form 
// --> uses virtual dom
// --> will use usetstate hook and onchange to fetch the data

// 2>uncontrolled-form
// --> use real-dom
// --> will use 

import { useState } from "react"

const State = () => {
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')

  let demo= (e) =>{
    e.preventDefault()
    console.log({name, password});
    (name === "admin" && password==="12345") ?
    window.open("http://www.pixbay.com"): window.location.reload()
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
        onChange={(e) => {setName(e.target.value)}}/>
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
        onChange={(e) => {setPassword(e.target.value)}}/>
        <br/>
        <button onClick={demo}>Submit</button>
      </form>
    </div>
  )
}

export default State