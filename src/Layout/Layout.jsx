import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet,Navigate} from 'react-router-dom'
import Aside from "./Aside/Aside";
import './layout.scss'
import {useSelector} from "react-redux";

const Layout = () => {

    const {user} = useSelector((store) => store.user)

    if (!user.login) {
        return <Navigate to='/login'/>
    }

    return (
        <div className='layout'>
            <Aside/>
            <div className='layout__main'>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;