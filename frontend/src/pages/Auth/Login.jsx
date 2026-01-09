import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/input'
import { validateEmail } from '../../utils/helper'
import instance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'

const Login = ({ setCurrentPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        if (!password) {
            setError("Please enter a password");
            return;
        }

        setError(null);
        // Proceed with login (API call, etc.)
        try { 
            const response=await instance.post(API_PATHS.AUTH.LOGIN,{
                email, password
            });
            const {token}=response.data;
            if(token){
                localStorage.setItem("token", token);
                navigate("/dashboard");
            }
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            }
            else {
                setError("Something went wrong. Please try again.")
            }
        }
    };

    return (
        <div className="w-[80vw] md:w-[33vw] flex flex-col justify-center p-7 ">
            <div className='text-xl font-bold'>Welcome Back !!</div>
            <div className='text-s text-slate-600 mt-4 mb-5'>Enter details to login </div>

            <form onSubmit={handleLogin}>
                <Input label="Email Address" type="email" placeholder='john@example.com' value={email} onChange={({ target }) => setEmail(target.value)} required />
                <Input label="Password" type='password' placeholder='Min 8 characters' value={password} onChange={({ target }) => setPassword(target.value)} required />
                <button type="submit" className='mt-2 bg-[#FFA500] cursor-pointer w-[30%] p-1 rounded-lg hover:bg-[#FF8C00]'>Login</button>
            </form>

            {error && <div className='text-red-500 text-sm mt-2'>{error}</div>}

            <p className='mt-2'>Don't have an account? <span className='text-[#FFA500] cursor-pointer' onClick={() => {
                setCurrentPage("signup");
            }}>Sign Up</span></p>
        </div>
    );
}

export default Login;
