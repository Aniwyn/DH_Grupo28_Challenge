import {Link,Outlet} from 'react-router-dom'



function Layout() {
  return (
    <div style={{fontFamily: 'Rubik, sans-serif'}} className='flex'>
        <div className="w-[23%] h-screen flex flex-col justify-center pl-12 pt-8 bg-white border-r">
          {/* Logo */}
          <div className="logo h-[20%]">
            <Link to="/">
            <div className='flex items-center'>
              <img src="img/logo-dh.png" style={{height: 40 + 'px'}} alt="" />
              <h2 className='font-bold text-lg'>Digital House</h2>
            </div>
            </Link>
          </div>
          <div className="flex flex-col h-[80%] text-lg">
            {/* <h3 className='text-md font-bold text-blue-800'>OPCIONES</h3> */}
            <div className='space-y-5'>
              <Link className='flex items-center hover:ml-2 transition-all duration-500' to="/enterprise"><img src="icons/office.png" className='pr-3' style={{height: 30 + 'px'}} alt="" />Empresas</Link>
              <Link className='flex items-center hover:ml-2 transition-all duration-500' to="/applicants"><img src="icons/applicants.png" className='pr-3' style={{height: 28 + 'px'}} alt="" />Aspirantes</Link>
              <Link className='flex items-center hover:ml-2 transition-all duration-500' to="/professions"><img src="icons/check-list.png" className='pr-4' style={{height: 25 + 'px'}} alt="" />Profesiones</Link>
              <Link className='flex items-center hover:ml-2 transition-all duration-500' to="/inscribe"><img src="icons/id-card.png" className='pr-2' style={{height: 33 + 'px'}} alt="" />Postulate aquí</Link>
              <Link className='flex items-center hover:ml-2 transition-all duration-500' to="/contact"><img src="icons/comment.png" className='pr-3' style={{height: 30 + 'px'}} alt="" />Contacto</Link>
            </div>
          </div>
        </div>
        <div className='w-[77%]'>
          <div className="px-10 py-6 border-b flex justify-between">
            <img src="icons/search.png" className='h-7' alt="" />
            <div className='flex space-x-7'>
              <img src="icons/add-user.png" className='h-6' alt="" />
              <img src="icons/user.png" className='h-6' alt="" />
              <img src="icons/exit.png" className='h-6' alt="" />
            </div>
          </div>
        <Outlet className="w-70"/>
        </div>
    </div>
    
  )
}

export default Layout