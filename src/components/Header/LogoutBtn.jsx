import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = () => {
    setLoading(true);
    authService.logout().then(() => {
      dispatch(logout());
    }).finally(() => setLoading(false));
  };

  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={"https://i.pinimg.com/originals/9f/5b/a6/9f5ba6b38c4259a23c5965a8164ec86f.gif"} className="w-full max-w-xs" />
    </div>
  ) : (
    <button className='inline-block px-6 py-2 text-gray-800 rounded-full font-medium hover:bg-gray-600 hover:text-white transition duration-200' onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
