import React from 'react';
import "./OneBanner.scss"
import {useNavigate} from "react-router-dom";
const OneBanner = () => {
    const navigate = useNavigate()
    return (
        <div className="one-banner">
            <div className="container">

                <div className="one-banner__left">
                    <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                    <h2 className="one-banner__h">Фото баннера:</h2>
                    <div className="one-banner__img-wrapper">
                        <img className="one-banner__img" src="" alt=""/>
                    </div>
                </div>
                <div className="one-banner__right">
                    <h2 className="one-banner__h">Заголовок :</h2>
                    <h3 className="one-banner__title">Lorem ipsum dolor.</h3>
                    <h2 className="one-banner__h">Описание :</h2>
                    <p className="one-banner__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, iure?</p>
                    <h2 className="one-banner__h">Филиал:</h2>
                    <h3 className="one-banner__location">ЦУМ</h3>
                    <div className="banner__btn-wrapper">
                        <button
                            className="banner__edit banners__btn banners__btn_blue">Изменить
                        </button>
                        <button className="banner__delete banners__btn banners__btn_red">Удалить</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OneBanner;