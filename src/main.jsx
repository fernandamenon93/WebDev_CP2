import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import PageNotFound from './pages/PageNotFound'
import Lista from './pages/Lista'
import Apresentacao from './pages/Apresentacao'
import Contato from './pages/Contato'
import Midias from './pages/Midias'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <ConteudoPrincipal/>},
      {path:'lista', element: <Lista/>},
      {path:'apresentacao', element: <Apresentacao/>},
      {path:'contato', element: <Contato/>},
      {path:'midias', element: <Midias/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)