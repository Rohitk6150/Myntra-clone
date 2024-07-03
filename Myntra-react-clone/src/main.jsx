import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './routes/App.jsx'
import Bag from "./routes/Bag.jsx"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './routes/Home.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'

const router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  children: [
    {path: "/", element:<Home></Home>},
    {path: "/bag", element: <Bag></Bag>},
  ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
