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
    return (
        <DashBoardLayout>DashBoard Page</DashBoardLayout>
    )
}
export default DashBoard