import React from 'react';
import DashBoardLayout from '../../components/Layouts/DashBoardLayout';
import toast from 'react-hot-toast';
import {LuPlus} from 'react-icons/lu';
import {CARD_BG} from '../../utils/data';
import { useNavigate } from 'react-router-dom';

const DashBoard =() =>{
    const navigate=useNavigate();
    return (
        <DashBoardLayout>DashBoard Page</DashBoardLayout>
    )
}
export default DashBoard