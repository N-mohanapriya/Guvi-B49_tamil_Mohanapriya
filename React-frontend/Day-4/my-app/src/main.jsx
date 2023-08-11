import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import post from './post.jsx'
import Like from './Like.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  <post></post>
    <Like></Like>
  </React.StrictMode>,
)
