import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Components/Layout'
import App from './Pages/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>,
)
