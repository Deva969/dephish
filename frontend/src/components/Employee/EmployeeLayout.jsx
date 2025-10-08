import { useState,useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BackgroundEmp from './BackgroundEmp';
import './EmployeeLayout.css'
import PageHeading from "./PageHeading";
import NavbarEmp from "./NavbarEmp";
import CanvasEmp from "./CanvasEmp";

const EmployeeLayout = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname.split("/")[1]);

    useEffect(() => 
    {
        setCurrentPage(location.pathname.split("/")[1]);
    }, [location.pathname]);

    return(
        <>
            <div className='dephishlogoemp'></div>
            <PageHeading path={currentPage}></PageHeading>
            <BackgroundEmp path={currentPage}></BackgroundEmp> 
            <NavbarEmp path={currentPage}></NavbarEmp>
            <CanvasEmp path={currentPage}></CanvasEmp>
            <Outlet></Outlet>
        </>
    );
}

export default EmployeeLayout;
