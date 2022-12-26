import React, {useEffect} from 'react';
import "./OneBanner.scss"
import {useNavigate, useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneBanner} from "../../../redux/reducers/oneBanner";
import axios from "../../../utils/axios";

const OneBanner = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const params = useParams()

    const {banner, status ,error} = useSelector((store) => store.oneBanner )

    useEffect(() => {
        dispatch(getOneBanner(params.id))
    }, [])


    if (status === 'error') {
       return <Navigate to='/banners'/>
    }

    const deleteBanner = () => {
        axios.delete(`banners/${banner._id}`)
            .then(() => navigate('/banners'))
            .catch(() => alert('не удалось удалить'))
    }

    console.log(banner)

    return (
        <div className="one-banner">

            <div className="container">

                <div className="one-banner__left">
                    <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                    <h2 className="one-banner__h">Фото баннера:</h2>
                    <div className="one-banner__img-wrapper">
                        <img className="one-banner__img" src={`http://62.113.96.238:4444${banner.images}`} alt={banner.title}/>
                    </div>
                </div>
                <div className="one-banner__right">
                    <h2 className="one-banner__h">Заголовок :</h2>
                    <h3 className="one-banner__title">{banner.title}</h3>
                    <h2 className="one-banner__h">Описание :</h2>
                    <p className="one-banner__description">{banner.text}</p>
                    <h2 className="one-banner__h">Филиал:</h2>
                    <h3 className="one-banner__location">{banner.branch}</h3>
                    <div className="banner__btn-wrapper">
                        <button
                            className="banner__edit banners__btn banners__btn_blue" onClick={() => navigate(`/banners/edit/${banner._id}`)}>Изменить
                        </button>
                        <button className="banner__delete banners__btn banners__btn_red" type='button' onClick={deleteBanner}>Удалить</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OneBanner;