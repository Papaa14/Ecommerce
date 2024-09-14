import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from "./components/AppContext";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App>        
        </App>       
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
