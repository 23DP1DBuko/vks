import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { captureUtm } from './lib/utm'

// Ловим utm_source/gclid/fbclid при входе с рекламы - форма отправит их вместе с заявкой.
captureUtm()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
