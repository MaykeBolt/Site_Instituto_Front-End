//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './app/Presentation/View/screens/index.css'
import App from './app/Presentation/View/screens/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Cadastro from './app/Presentation/View/screens/Cadastro.tsx'
import Login from './app/Presentation/View/screens/Login.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  // </StrictMode>,
)
