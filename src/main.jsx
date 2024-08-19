import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import {Signup} from './components/index.js'
import { AddPost, EditPost, AllPosts, Post} from './components/index.js'
import { Features,Contact,Account, TermsConditions, PrivacyPolicy } from "./pages/footer-pages/main.js"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<AuthLayout authentication={false}><Login /></AuthLayout>} />
        <Route path="signup" element={<AuthLayout authentication={false}><Signup /></AuthLayout>} />
        <Route path="all-posts" element={<AuthLayout authentication><AllPosts /></AuthLayout>} />
        <Route path="add-post" element={<AuthLayout authentication><AddPost /></AuthLayout>} />
        <Route path="edit-post/:slug" element={<AuthLayout authentication><EditPost /></AuthLayout>} />
        <Route path="post/:slug" element={<Post />} />
        {/* Footer Pages starts here */}
        <Route path='/features' element={<Features />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/account' element={<Account />} />
        <Route path='/t&c' element={<TermsConditions />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      </Route>
    )
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>
)
