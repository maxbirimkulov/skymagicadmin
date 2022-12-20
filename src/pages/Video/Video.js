import React from 'react';
import './Video.scss'
import {useNavigate} from "react-router-dom";


const Video = () => {
    const navigate = useNavigate()
    return (
        <section className='video'>
            <div className="video__container container">
                <button className='video__crate-btn' onClick={()=>navigate(`/video/create`)}>Создать видео</button>
                    <div className="video__wrapper">
                      <div className='video__one'>
                          <video src="https://youtu.be/jJq14Ptvmxk" controls ></video>
                          <p>Описание:</p>
                      </div>
                        <div className='video__one'>
                            <video src="https://youtu.be/jJq14Ptvmxk" controls></video>
                            <p>Описание:</p>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Video;