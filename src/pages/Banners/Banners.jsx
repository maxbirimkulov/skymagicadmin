import React from 'react';
import "./Banners.scss"
import {useNavigate} from "react-router-dom";
const Banners = () => {
    const navigate = useNavigate()
    return (
        <section className="banners">
            <div className="container">
                <div className="banners__bar">
                    <label className="banners__location">
                        Выберите Локацию
                        <select className="location" name="location" id="">
                            <option value="1" className="location__item">Цум</option>
                            <option value="2" className="location__item">Томми</option>
                            <option value="3" className="location__item">lorem</option>
                        </select>
                    </label>
                    <button className="banners__add banners__btn banners__btn_green" onClick={() => navigate(`/banners/create`)}>
                        Создать баннер
                    </button>
                </div>
                <div className="banners__wrapper">
                    <div className="banner">
                        <div className="banner__img"></div>
                        <h2 className="banner__title">title Lorem ipsum.</h2>
                        <p className="banner__description">description Lorem ipsum dolor sit amet.</p>
                        <h3 className="banner__location">Цум</h3>
                        <div className="banner__btn-wrapper">
                            <button className="banner__edit banners__btn banners__btn_blue">Изменить</button>
                            <button className="banner__delete banners__btn banners__btn_red">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banners;