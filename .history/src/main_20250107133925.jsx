import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'


createRoot(document.getElementById('root')).render(
  
  <Provider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)