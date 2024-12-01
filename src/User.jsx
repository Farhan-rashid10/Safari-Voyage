import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAuthState = localStorage.getItem('isAuthenticated') === 'true';
    const userEmail = localStorage.getItem('user');
    setIsAuthenticated(savedAuthState);

    if (savedAuthState && userEmail) {
      fetch(`http://127.0.0.1:5000/user/email/${userEmail}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setUser(data);
          }
        })
        .catch(err => console.error("Error fetching user data:", err));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', userData.email);
    setUser(userData);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setUser({ name: '', email: '' });
    setShowProfileCard(false);
    navigate('/');
  };

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <>
      <div className="topbar text-center bg-gray-100">
        {showLoginModal && (
          <Login closeModal={closeLoginModal} onLoginSuccess={handleLoginSuccess} />
        )}

        {showProfileCard && (
          <div className="fixed top-28 right-8 h-300 w-250 bg-blue shadow-lg">
            <div className="bg-blue-600 flex flex-col items-center justify-center rounded-lg">
              <p className="text-lg font-medium text-white mt-6">{user.name || 'User'}</p>
              <div className="profile-image bg-white-600 mt-1 mb-4">
                <svg className="w-14 h-14 mx-auto text-gray-400" viewBox="0 0 122.88 122.88" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14c6.87-9.22,9.02-22.09,9.02-34.17c0-12.08-2.15-24.96-9.02-34.17c-6.87,3.29-21.34,4.38-27.69,8.87c-0.03,0.06-0.07,0.12-0.12,0.17c-1.41,1.43-2.51,3.03-3.6,4.63c0.02,0.03,0.05,0.06,0.07,0.09l5.51-9.07c2.34-3.74,3.25-4.95,4.45-6.58c0.89-1.73,0.83-4.47-0.43-5.81c-1.33-2.02-2.96-3.03-5.45-3.57c-0.77-0.33-1.84-0.61-2.96-0.87c-0.34-0.07,1.14-5.36-0.16-5.65c-0.61,0.48-1.68-0.64-2.42,0.18c-0.52,0.53-1.19,1.22-1.94,1.97c-3.03,2.77-7.85,1.97-11.33-0.51l-6.94-4.94c-2.44-2.06-5.31-2.8-8.22-2.47l-7.83-0.04c-1.06,0.18-2.09,0.34-3.11,0.53c-4.14,0.83-5.57,4.48-6.61,5.76c0.39,0.02,1.65-1.83,2.73-0.98z"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}

<div className="flex mx-auto space-x-5">
  {!isAuthenticated ? (
    <>
      <button onClick={openLoginModal} className="text-sm font-semibold text-gray-700">Login</button>
      <NavLink to="/signup" className="text-sm font-semibold text-gray-700">
        Sign Up
      </NavLink>
    </>
  ) : (
    <>
      <button onClick={handleLogout} className="text-sm font-semibold text-gray-700">
        Logout
      </button>
    </>
  )}
</div>

      </div>
    </>
  );
};

export default Header;
