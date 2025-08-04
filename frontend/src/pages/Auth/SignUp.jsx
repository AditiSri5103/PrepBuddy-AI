import { React, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../../components/Inputs/input'
import { validateEmail } from '../../utils/helper';

const SignUp = ({setCurrentPage}) => {
  // const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if(!name){
      setError("Please enter your name.");
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email.");
      return;
    }
    if(!password){
      setError("Please enter a valid password");
      return;
    }
    setError(null);

    try { 
      
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
    <div className='w-[80vw] md:w-[33vw] flex flex-col justify-center p-7 '>
      <h3 className='text-2xl font-bold'>Create an Account</h3>
      <p className='text-s text-slate-600 mt-4 mb-5'>Join us by entering your details.</p>

      <form onSubmit= { handleSignUp }>
        <div>
          <Input label="Full Name" type="text" placeholder='John Doe' value={name} onChange={({ target }) => setName(target.value)} required />
          <Input label="Email Address" type="email" placeholder='john@example.com' value={email} onChange={({ target }) => setEmail(target.value)} required />
          <Input label="Password" type='password' placeholder='Min 8 characters' value={password} onChange={({ target }) => setPassword(target.value)} required />
        </div>

        <button  type="submit" className='mt-2 bg-[#FFA500] cursor-pointer w-[30%] p-1 rounded-lg hover:bg-[#FF8C00]'>Signup</button>
      </form>
        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        <p className='mt-2'>Already have an account ? <span className='text-[#FFA500] cursor-pointer' onClick={() => {
                setCurrentPage("login")
            }
          }>Login</span> </p>
    </div>
  )
}

export default SignUp;
