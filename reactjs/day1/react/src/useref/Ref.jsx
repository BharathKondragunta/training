
// const Ref = () => {
//     let demo = document.getElementById("demo")
//     console.log(demo);;
//     demo.style.backgroundColor="yellow"
    
//   return (
//     <>
//         <h1 id ='demo' >Hello-World</h1>
//     </>
//   )
// }

// export default Ref

// import { useRef } from 'react'

// const Ref = () => {
//     let demo = useRef()
//     console.log(demo.current);
//     // demo.current.style.backgroundColor = "yellow"
//     // demo.current.style.textAlign = "center"
//   return (
//     <h2 ref={demo}>hello</h2>
//   )
// }

// export default Ref

import { useState, useRef } from 'react'
import video from '../image/244754_tiny.mp4'

const Ref = () => {
    let ref1 = useRef()
    console.log(ref1.current);
    let [state, setState ] = useState(true)
    let demo = () => {
        setState(!state)
        state===true ? ref1.current.play():ref1.current.pause()
    }
    
  return (
    <div>
        <video ref= {ref1} src={video} style={{height:"300px"}}
        onClick={demo}></video>
    </div>
  )
}

export default Ref