import React from 'react';
import './Video.scss'
import {useNavigate} from "react-router-dom";


const Video = () => {
    const navigate = useNavigate()
    return (
        <section className='video'>
            <div className="video__container container">
                <button className='video__crate-btn' onClick={()=>navigate(`/video/create`)}>Создать видео</button>
                    <div className="photo__wrapper">
                        <div className="photo__box">
                            <a data-fancybox="gallery" data-caption={"hello"} href="https://lipsum.app/id/33/1024x768" >
                                <img className="photo__img" alt="" src="https://lipsum.app/id/33/200x150" />
                            </a>
                            <h2 className="photo__title">Имя </h2>
                            <h3 className="photo__location">Цум</h3>
                        </div>
                        <div className="photo__box">
                            <a data-fancybox="gallery" data-caption={"hello"} href="https://lipsum.app/id/33/1024x768" >
                                <img className="photo__img" alt="" src="https://lipsum.app/id/33/200x150" />
                            </a>
                            <h2 className="photo__title">Имя </h2>
                            <h3 className="photo__location">Цум</h3>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Video;