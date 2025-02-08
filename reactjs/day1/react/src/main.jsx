import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Cbc from './components/Cbc'
// import Fbc from './components/Fbc.jsx'
// import Props from './props/Props.jsx'
// import State from './State/State.jsx'
// import Parent from './props/Parent.jsx'
// import Inline from './Styles/Inline.jsx'
import "../src/Styles/globally.css"
// import Comp1 from './Styles/Comp1'
// import External from './Styles/External'
import Ref from './useref/Ref'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cbc/>
    <Fbc/>
    <Props/>
    <Parent/>
    <State/> */}
    {/* <Inline/> */}
    {/* <Comp1/> */}
    {/* <External/> */}
    <Ref/>
  </StrictMode>
)
