import React, {useEffect} from 'react';
import {useNavigate, useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneSales} from "../../../redux/reducers/oneSales";
import axios from "../../../utils/axios";

const OneSales = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const params = useParams()

    const {sales, status ,error} = useSelector((store) => store.oneSales )

    useEffect(() => {
        dispatch(getOneSales(params.id))
    }, [])


    if (status === 'error') {
       return <Navigate to='/sales'/>
    }

    const deleteSales = () => {
        axios.delete(`sales/${sales._id}`)
            .then(() => navigate('/sales'))
            .catch(() => alert('не удалось удалить'))
    }

    return (
        <div className="one-banner">
            <div className="container">

                <div className="one-banner__left">
                    <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                    <h2 className="one-banner__h">Фото акции:</h2>
                    <div className="one-banner__img-wrapper">
                        <img className="one-banner__img" src={`${process.env.REACT_APP_URL}${sales.images}`} alt={sales.title}/>
                    </div>
                </div>
                <div className="one-banner__right">
                    <h2 className="one-banner__h">Заголовок :</h2>
                    <h3 className="one-banner__title">{sales.title}</h3>
                    <h2 className="one-banner__h">Описание :</h2>
                    <p className="one-banner__description">{sales.description}</p>
                    <h2 className="one-banner__h">Дата:</h2>
                    <h3 className="one-banner__location">{sales.date}</h3>
                    <h2 className="one-banner__h">Полное описание:</h2>
                    <h3 className="one-banner__location">{sales.descriptionFull}</h3>
                    <div className="banner__btn-wrapper">
                        <button
                            className="banner__edit banners__btn banners__btn_blue" onClick={() => navigate(`/sales/edit/${sales._id}`)}>Изменить
                        </button>
                        <button className="banner__delete banners__btn banners__btn_red" type='button' onClick={deleteSales}>Удалить</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OneSales;