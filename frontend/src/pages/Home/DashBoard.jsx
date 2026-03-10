import React, {useState} from 'react';
import DashBoardLayout from '../../components/Layouts/DashBoardLayout';
import toast from 'react-hot-toast';
import {LuPlus} from 'react-icons/lu';
import {CARD_BG} from '../../utils/data';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';


const DashBoard =() =>{
    const navigate=useNavigate();
    const [sessions, setSessions]=useState([]);
    const[openCreateModal,setOpenCreateModal]=useState(false);
    const[openDeleteAlert,setOpenDeleteAlert]=useState({
        open:false,
        data:null,
    });

    const fetchAllSession= async()=>{
        try{
            const response=await instance.get(API_PATHS.SESSION.GET_ALL);
            setSessions(response.data);
        }
        catch(error){
            console.log("Error fetching session data ", error);
        }

    }
    const deleteSession = async =(sessionData)=>{
        try{
            const response=instance.delete(API_PATHS.SESSION.DELETE(sessionData));
        }
        catch(error){
            console.log("Error deleting session: ", error);
        }
    }
    useEffect(()=>{
        fetchAllSession();
    }, []);
    return (
        <DashBoardLayout>
            <div className="container mx-auto pt-4 pb-4">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0'>

                </div>
                <button className='h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-20'></button>
            </div>
        </DashBoardLayout>
    )
}
export default DashBoard