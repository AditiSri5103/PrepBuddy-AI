import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);

  const handleLogout = () => {
    clearUser();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-start space-y-3 px-4 py-3">
      
      <div className="text-gray-700 text-base">
        
        <span className="font-semibold text-gray-900">
        Welcome 👋{" "}  {user?.name}
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-orange-600 transition duration-200"
      >
        Logout
      </button>

    </div>
  );
};

export default ProfileInfoCard;