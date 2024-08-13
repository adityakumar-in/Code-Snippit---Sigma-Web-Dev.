import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import these two to use React Redux - main.jsx
import { store  } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* You need to wrap the App component with the Provider component and pass the store as a prop to the Provider component. */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
