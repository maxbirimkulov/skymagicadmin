import React, {useEffect, useState} from 'react';
import "./BottomBanners.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../utils/axios";




const BottomBanners = () => {
    const navigate = useNavigate()


    const [url, setUrl] = useState('')


    useEffect(() => {
        axios('/bottom/banners').then((res) => setUrl(res.data[0]))
    }, [])


    return (
        <section className="bottomBanners">
            <div className="container">
                <div className="banners__bar">
                    <button className="banners__add banners__btn banners__btn_green" onClick={() => navigate(`/bottombanners/change/${url._id}`)}>
                        Поменять баннер
                    </button>
                </div>
                <div className='bottomBanners__cont'>
                    <img className='bottomBanners__img' src={`${process.env.REACT_APP_URL}${url.images}`} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default BottomBanners;