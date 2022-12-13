import React from 'react';
import "./Gallery.scss"

import {useNavigate} from "react-router-dom";
import Fancybox from "./Fancybox/Fancybox";


const Gallery = () => {
    const navigate = useNavigate()
    return (
        <section className="gallery">
            <div className="container">
                <button className="gallery__add banners__btn banners__btn_blue" onClick={() => navigate(`/gallery/create`)}>
                    Создать фото
                </button>
                <Fancybox>
                    <div className="photo__wrapper">
                        <div className="photo__box">
                            <a data-fancybox="gallery" data-caption={"hello"} href="https://lipsum.app/id/33/1024x768" >
                                <img className="photo__img" alt="" src="https://lipsum.app/id/33/200x150" />
                            </a>
                            <h2 className="photo__title">Имя </h2>
                            <h3 className="photo__location">Цум</h3>
                            <button
                                className="photo__edit banners__btn banners__btn_blue" onClick={() => navigate(`/gallery/edit/:id`)} >Подробнее
                            </button>
                        </div>
                        <div className="photo__box">
                            <a data-fancybox="gallery" data-caption={"hello"} href="https://lipsum.app/id/33/1024x768" >
                                <img className="photo__img" alt="" src="https://lipsum.app/id/33/200x150" />
                            </a>
                            <h2 className="photo__title">Имя </h2>
                            <h3 className="photo__location">Цум</h3>
                            <button
                                className="photo__edit banners__btn banners__btn_blue" onClick={() => navigate(`/gallery/edit/:id`)} >Подробнее
                            </button>
                        </div>

                    </div>
                </Fancybox>
            </div>


        </section>
    );
};

export default Gallery;