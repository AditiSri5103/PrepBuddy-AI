import {React,useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'


const Input=({label, type, placeholder, value, onChange})=>{
    const[showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return(
        <>
        <label className='text-[15px] text-slate-900'>{label}</label>
        <div className='relative'>
            <input 
            type={
                type=="password" ? (showPassword ? "text":"password") : type }
                placeholder={placeholder}
                value={value}
                className='w-full  bg-transparent mb-2 outline-none border-b-2 border-slate-300 focus:border-slate-600 transition-all duration-200 py-1 px-1 text-[15px] text-slate-900'
                onChange={(e)=>onChange(e)}
            />

        {
            type==="password" && (
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'>
                {showPassword ? (
                    <FaRegEye size={22} className='cursor-pointer fill-[#FFA500]' onClick={toggleShowPassword} />
                ) : (
                    <FaRegEyeSlash size={22} className='cursor-pointer text-slate-400' onClick={toggleShowPassword} />
                )}  
                </span>
            )
        }
        </div>
        {/* // something related to error handling */}

        
        
        </>
    )
} 
export default Input;