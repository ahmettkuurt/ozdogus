import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/global.css'
import App from './App'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerender edilmiş sayfalar hydrate edilir; geliştirme sunucusunda boş kök render edilir.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
