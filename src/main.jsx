import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MySelf() {
  return (
    <>
      <h1>Hello this is me Pratham!</h1>
      <p>I am the best and I know it!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <MySelf />
      <App />
    </StrictMode>
  </>
)
