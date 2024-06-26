import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './assets/components/root/Root.jsx'
import Home from './assets/components/Home/Home.jsx'
import BookDetails from './assets/components/BookDetails/BookDetails.jsx'
import ListedBooks from './assets/components/listedBooks/ListedBooks.jsx'
import Charts from './assets/components/Charts/Charts.jsx'
import ErrorPage from './assets/components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('data.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/pagesToRead',
        element: <Charts></Charts>,
        loader: () => fetch('/data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
