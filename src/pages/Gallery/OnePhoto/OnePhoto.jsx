import React from 'react';
import "./OnePhoto.scss"
import {useNavigate} from "react-router-dom";
const OnePhoto = () => {
    const navigate = useNavigate()
    return (
        <div className="one-photo">
            <div className="container">

                <div className="one-photo__left">
                    <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                    <h2 className="one-photo__h">Фото:</h2>
                    <div className="one-photo__img-wrapper">
                        <img className="one-banner__img" src="" alt=""/>
                    </div>
                </div>
                <div className="one-photo__right">
                    <h2 className="one-photo__h">Заголовок :</h2>
                    <h3 className="one-photo__title">Lorem ipsum dolor.</h3>
                    <h2 className="one-photo__h">Описание :</h2>
                    <p className="one-photo__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, iure?</p>
                    <h2 className="one-photo__h">Филиал:</h2>
                    <h3 className="one-photo__location">ЦУМ</h3>
                    <div className="photo__btn-wrapper">
                        <button
                            className="photo__edit banners__btn banners__btn_blue">Изменить
                        </button>
                        <button className="photo__delete banners__btn banners__btn_red">Удалить</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OnePhoto;