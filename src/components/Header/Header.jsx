import React from 'react'
import {Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-4 shadow-lg bg-gray-200'>
      <Container>
        <nav className='hidden md:flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            {/* <Logo width='50px' /> */}
            <span className='ml-3 text-white text-xl font-bold font-mono'><i className='text-[#d65c6b]'>Story</i><i className='text-black'>Flicker</i></span>
          </Link>
          <ul className='flex space-x-4'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='inline-block px-4 py-2 text-gray-800 font-medium rounded hover:bg-gray-600 hover:text-white transition duration-200'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        <nav className='md:hidden flex flex-col items-center justify-between'> {/* for smaller devices */}
          <Link to='/' className='flex items-center'>
            {/* <Logo width='50px' /> */}
            <span className='ml-3 text-white text-xl font-bold font-mono'><i className='text-[#d65c6b]'>Story</i><i className='text-black'>Flicker</i></span>
          </Link>
          <ul className='flex space-x-4'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='inline-block px-4 py-2 text-gray-800 font-medium rounded hover:bg-gray-600 hover:text-white transition duration-200'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;