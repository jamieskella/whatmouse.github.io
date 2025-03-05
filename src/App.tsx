import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WhatMouse</h1>
      <div className="card">
        <p>
          This is a demo React application built with Vite and TypeScript, 
          configured for deployment to GitHub Pages.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <div className="card">
        <h2>Deployment Instructions</h2>
        <h3>Manual Deployment</h3>
        <ol className="instructions">
          <li>Push this project to your GitHub repository <code>whatmouse.github.io</code></li>
          <li>Run <code>npm run deploy</code> to deploy to GitHub Pages</li>
          <li>Your site will be available at your custom domain <code>https://whatmouse.xyz</code></li>
        </ol>
        
        <h3>Automated Deployment</h3>
        <ol className="instructions">
          <li>Push changes to the main branch</li>
          <li>GitHub Actions will automatically build and deploy the site</li>
          <li>Your site will be available at your custom domain <code>https://whatmouse.xyz</code></li>
        </ol>
      </div>
      <p className="read-the-docs">
        Built with Vite, React, and TypeScript
      </p>
    </>
  )
}

export default App
