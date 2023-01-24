import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'

export const Context = createContext(null)

// createRoot(
//   <Context.Provider
//     value={{
//       user: new UserStore(),
//       device: new DeviceStore(),
//     }}
//   >
//     <App />
//   </Context.Provider>,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>,
)

// import ReactDOM from 'react-dom'
// ReactDom.render(<h1>Your App</h1>, document.getElementById('root'))

// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)
