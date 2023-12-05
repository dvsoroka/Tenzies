/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 * 
 * 
 *  cd  ../
 *  npm create vite@latest
 *  cd Tenzies
 *  npm install
 *  
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './style.css'

// ReactDOM.render(<App />, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
