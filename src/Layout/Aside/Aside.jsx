import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './aside.scss'
import {MdOutlineArrowForwardIos,MdDoubleArrow} from 'react-icons/md'
import nav from "../../utils/Nav";


const Aside = () => {

    const [show,setShow] = useState(true)

    return (
        <aside className={`aside ${show ? '' : 'hide'}`}>
            <div className='aside__top'>
                <h1 className='aside__title'>SKY MAGIC </h1>
                <p className='aside__admin'>Admin Panel</p>
            </div>
            <div className='aside__dashboard'>
                <NavLink className='aside__link aside__link_top' to='/'>Dashboard <MdOutlineArrowForwardIos/></NavLink>
            </div>
            <div className='aside__content'>
                <h2 className='aside__main'>Main</h2>

                <div className='aside__menu'>
                    {
                        nav.map((item) => (
                            <NavLink key={item.text} className='aside__link' to={item.path}>{item.text}<MdOutlineArrowForwardIos/></NavLink>
                        ))
                    }
                </div>

            </div>

            <div className='aside__show'>
                <span className={`aside__show-icon ${show ? '' : 'hide'}`} onClick={() => setShow(!show)}>
                        <MdDoubleArrow/>
                </span>

            </div>
        </aside>
    );
};

export default Aside;