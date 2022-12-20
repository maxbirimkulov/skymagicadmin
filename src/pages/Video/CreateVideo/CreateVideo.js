import React from 'react';
import './CreateVideo.scss'
import {useNavigate} from "react-router-dom";


const CreateVideo = () => {
    const navigate =useNavigate()
    return (
        <section className='create-video'>
            <div className="create-video container">
                <button type='button' className="create-video__btn" onClick={() => navigate(-1)}>назад</button>
                
            </div>
        </section>
    );
};

export default CreateVideo;