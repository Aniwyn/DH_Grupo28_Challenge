import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Applicants from './pages/Applicants'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Enterprise from './pages/Enterprise'
import Inscribe from './pages/Inscribe'
import Professions from './pages/Professions'
import DeleteApplicant from './components/DeleteApplicant'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/enterprise',
            element:<Enterprise/>
        },
        {
            path:'/applicants',
            element:<Applicants/>
        },
        {
            path:'/applicants/:id',
            element:<Profile/>
        },
        {
            path:'/applicants/delete/:id',
            element:<DeleteApplicant/>
        },
        {
            path:'/professions',
            element:<Professions/>
        },
        {
            path:'/inscribe',
            element:<Inscribe/>
        },
        {
            path:'/contact',
            element:<Contact/>
        }
    ]
  }
])

export default router